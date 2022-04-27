import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActualiteService {
  private baseUrl = 'http://localhost:8086/api/v1/actualite';

  constructor(private http : HttpClient) { }


getActualite(id : number) : Observable <any>
{
  return this.http.get(`${this.baseUrl}/${id}`);
} 

createActualite (actualite :Object ) : Observable <Object>
{
  return this.http.post(`${this.baseUrl}` , actualite );
} 

updateActualite (id : number, value:any) : Observable <Object>
{
  return this.http.put(`${this.baseUrl}/${id}`,value);
} 


deleteActualite (id : number) : Observable <any>
{
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType:'text' });
} 


getActualiteList () : Observable <any>
{
  return this.http.get(`${this.baseUrl}`);
} 

}