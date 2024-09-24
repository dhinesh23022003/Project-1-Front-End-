import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantySubmissionComponent } from './warranty-submission.component';

describe('WarrantySubmissionComponent', () => {
  let component: WarrantySubmissionComponent;
  let fixture: ComponentFixture<WarrantySubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarrantySubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantySubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
