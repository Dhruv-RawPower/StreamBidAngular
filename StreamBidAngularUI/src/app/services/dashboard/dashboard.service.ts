import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url = "http://localhost:8082";
  
  constructor(private http: HttpClient) { 

  }

  getAllUsers(){
     const headers = new HttpHeaders({token: "Bearer "+localStorage.getItem("token")})
    // return this.http.post(`${this.url}/getAllUsers`,{headers, responseType: 'text' as 'json'});
    return this.http.post(`${this.url}/getAllUsers`,'');
   }
}
