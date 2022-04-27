import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private baseUrl = '/api/experiences';
choixmenu : string = 'A';
host: string = "http://localhost:8086";

public dataForm!: FormGroup;
listData!: Experience[];
  constructor(private http: HttpClient) { }

getData(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

createData(formData: FormData): Observable<any>{
  return this.http.post(`${this.baseUrl}`, formData);
}

updateData(id: number, value: any): Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, value);
}

deleteData(id: number): Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
}
getAll(): Observable<any>{
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
