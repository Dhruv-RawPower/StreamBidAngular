import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "http://localhost:8082"
 
constructor(private http: HttpClient) { }

//for login user
doRegisteration(credentials: any){
 
 // const headers = new HttpHeaders(})
  return this.http.post(`${this.url}/saveChatUser`,credentials);

}
}
