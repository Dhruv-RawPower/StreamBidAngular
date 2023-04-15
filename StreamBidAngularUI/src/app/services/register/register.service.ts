import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "http://localhost:8082"
 
constructor(private http: HttpClient) { }

//for login user
doRegisteration(file:any,credentials: any){
 console.log('credentials '+JSON.stringify(credentials))

 const formData: FormData = new FormData();
 formData.append('file', file);
 console.log(file+" file")
 formData.append('credentials', JSON.stringify(credentials));
 
 // const headers = new HttpHeaders(})
// const headers = new HttpHeaders({'Content-Type':'multipart/form-data'});
  console.log('formDATA ',formData)
  return this.http.post(`${this.url}/saveChatUser`,formData);
  
}
}
