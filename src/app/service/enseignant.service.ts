import { DatePipe } from '@angular/common';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Enseignant } from '../model/enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private baseUrl = '/api/enseignants';
  private baseUrl1 = '/api/enseignants/5';
  islogin = false;
  choixmenu : string  = 'A';
  public dataForm!:  FormGroup;
  host: string = "http://localhost:8086";
  listData!: Enseignant[];
  tokenStr = localStorage.getItem('token') || '';

    constructor(private http: HttpClient) { }
    
    login(email: String): Observable<Object> {
      return this.http.get(`${this.baseUrl1}/${email}`,{ headers: { authorization: this.tokenStr } });
    } 
    
    getData(id: number): Observable<Object>{
      return this.http.get(`${this.baseUrl}/${id}`,{ headers: { authorization: this.tokenStr } });
    }
  
  createData(formData: FormData): Observable<any>{
    return this.http.post(`${this.baseUrl}`, formData,{ headers: { authorization: this.tokenStr } });
  }
  createEnseigant(enseignant : Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, enseignant,{ headers: { authorization: this.tokenStr } });
  }
  
  updateData(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value,{ headers: { authorization: this.tokenStr } });
  }
  
  deleteData(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text', headers: { authorization: this.tokenStr } });
  }
  getAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}`,{ headers: { authorization: this.tokenStr } });
  }
  
  uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
        reportProgress: true,
        responseType: 'text'
    });
  
    return this.http.request(req);
   }

}
