import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface WarrantySubmission {
    id?: string;
    name: string;
    mobile: string;
    invoiceDate: string;
    batterySerial: string;
    description?: string;
}

@Injectable({
    providedIn: 'root'
})
export class WarrantySubmissionService {
    private apiUrl = 'http://localhost:8080/api/warranty-submissions';

    constructor(private http: HttpClient) {}

    submitWarranty(request: WarrantySubmission): Observable<WarrantySubmission> {
        return this.http.post<WarrantySubmission>(this.apiUrl, request);
    }
}
