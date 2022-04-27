import { DatePipe } from '@angular/common';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Enseignant } from '../model/enseignant';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(enseignant: Enseignant) {
    throw new Error('Method not implemented.');
  }
  host: string = "http://localhost:8086";
  private baseUrl = '/api/users';
  private baseUrl1 = '/api/authenticate';
  islogin = false;
  admin = false;
  suser = false;
  choixmenu : string  = 'A';
  listData!: User[];
  public dataForm!:  FormGroup; 
  constructor(private http: HttpClient) { }

  login(username: any, password: any) {
     return this.http.post(`${this.baseUrl1}`,{username, password});
   }  
 
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
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
