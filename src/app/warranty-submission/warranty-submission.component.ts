import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WarrantySubmissionService } from './warranty-submission.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-warranty-submission',
  templateUrl: './warranty-submission.component.html',
  styleUrls: ['./warranty-submission.component.css']
})
export class WarrantySubmissionComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  serviceRequestForm!: FormGroup;
  submitted = false;
  serviceRequestNo: string | undefined;

  constructor(
    public formBuilder: FormBuilder,
    public modalService: NgbModal,
    private warrantySubmissionService: WarrantySubmissionService
  ) {}

  ngOnInit() {
    this.serviceRequestForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\+91\s[0-9]{10}$/)]],
      invoiceDate: ['', Validators.required],
      batterySerial: ['', Validators.required],
      description: ['']
    });
  }

  sidenavOpened() {
    console.log('Sidenav opened');
  }

  sidenavClosed() {
    console.log('Sidenav closed');
  }

  get f() { return this.serviceRequestForm.controls; }

  onSubmit(modalContent: TemplateRef<any>) {
    this.submitted = true;

    if (this.serviceRequestForm.invalid) {
      return;
    }

    this.warrantySubmissionService.submitWarranty(this.serviceRequestForm.value)
      .subscribe({
        next: response => {
          console.log('Saved Data:', response);
          this.serviceRequestNo = response.id; 
          this.modalService.open(modalContent); 
        },
        error: err => {
          console.error('Submission failed', err);
        }
      });
  }
}
