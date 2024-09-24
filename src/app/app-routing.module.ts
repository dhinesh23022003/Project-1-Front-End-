import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarrantySubmissionComponent } from './warranty-submission/warranty-submission.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';

const routes: Routes = [
  {path:"warrantysubmission",component:WarrantySubmissionComponent},
  {path:"deliverydetails",component:DeliveryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
