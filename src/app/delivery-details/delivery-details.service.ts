import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface DeliveryDetails {
  id?: string;
  parcelServiceProvider: string;
  deliveryReceiptNo: string;
  deliveryDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryDetailsService {
  private apiUrl = 'http://localhost:8080/api/delivery-details';

  constructor(private http: HttpClient) { }

  submitDeliveryDetails(request: DeliveryDetails): Observable<DeliveryDetails> {
    return this.http.post<DeliveryDetails>(this.apiUrl, request);
  }
}
