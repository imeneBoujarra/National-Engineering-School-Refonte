import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {
  private baseUrl = 'http://localhost:8086/api/users';
  constructor(private http : HttpClient) { }


getEnseignant (id : number) : Observable <any>
{
  return this.http.get(`${this.baseUrl}/${id}`);
} 

createEnseignant (enseignant :Object) : Observable <Object>
{
  return this.http.post(`${this.baseUrl}` ,enseignant);
} 

updateEnseignant (id : number, value:any) : Observable <Object>
{
  return this.http.put(`${this.baseUrl}/${id}`,value);
} 


deleteEnseignant (id : number) : Observable <any>
{
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType:'text' });
} 


getEnseignantList () : Observable <any>
{
  return this.http.get(`${this.baseUrl}`);
} 

  
}
