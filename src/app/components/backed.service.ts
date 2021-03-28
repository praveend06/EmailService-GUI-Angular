import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackedService {
// tslint:disable-next-line:ban-types
private baseUrl: String = 'http://localhost:8282';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  sendEmail(data: any){
    return this.http.post(`${this.baseUrl}/sendEmail`, data);
  }
}
