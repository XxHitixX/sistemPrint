import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AcabarseResponse } from '../pages/interfaces/acabarse.interface';

@Injectable({
  providedIn: 'root'
})
export class AcabarseService {

  baseUrl : string = environment.baseUrl;

  constructor(private http : HttpClient,) { }


  getAcabarse(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-token', token || '');
    return this.http.get<AcabarseResponse>(`${this.baseUrl}/acabarse`, { headers });
    
  }

}
