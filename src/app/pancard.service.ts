import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PancardService {

  private baseUrl="http://localhost:3322/adhar/11223";

  constructor(private http:HttpClient) { }

  getPanCardData():Observable<any>
  {
    return this.http.get(this.baseUrl);
  }
}
