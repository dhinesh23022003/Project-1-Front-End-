import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryDetailsService } from './delivery-details.service';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {
  @ViewChild('sidenav') sidenav!:MatSidenav;
  
  deliveryrequestno?:string;
  deliveryForm!: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public modalService: NgbModal,
    private deliveryDetailsService: DeliveryDetailsService
  ) { }

  ngOnInit() {
    this.deliveryForm = this.formBuilder.group({
      serviceProvider: ['', Validators.required],
      receiptNumber: ['', Validators.required],
      deliveryDate: ['', Validators.required],
    });
  }

  get f() { return this.deliveryForm.controls; }

  onSubmit(modalContent: TemplateRef<any>) {
    this.submitted = true;
  
    if (this.deliveryForm.invalid) {
      return;
    }
  
    const requestPayload = {
      parcelServiceProvider: this.deliveryForm.value.serviceProvider,
      deliveryReceiptNo: this.deliveryForm.value.receiptNumber,
      deliveryDate: this.deliveryForm.value.deliveryDate
    };
  
    console.log('Submitted Values:', requestPayload);
  
    this.deliveryDetailsService.submitDeliveryDetails(requestPayload)
      .subscribe({
        next: response => {
          this.deliveryrequestno = response.id;
          console.log('Saved Data:', response);
          this.modalService.open(modalContent);
        },
        error: (err) => {
          console.error('Submission failed', err);
        }
      });
  }
  
}
