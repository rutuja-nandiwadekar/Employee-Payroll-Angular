import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private baseUrl: string = "http://localhost:8080/employeepayrollservice/";

  constructor(private httpClient: HttpClient) {

  }

  getEmployeeData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "get");
  }

}