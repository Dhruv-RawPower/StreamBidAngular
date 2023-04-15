import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService { url = "http://localhost:8082"
 
constructor(private http: HttpClient) { }

//for login user
doLogin(credentials: any){
 
 // const headers = new HttpHeaders(})
  return this.http.post(`${this.url}/token`,credentials);

}

//Make call after login
makeCall(token : any){
  
  const headers = new HttpHeaders({token: "Bearer "+token})
  return this.http.post(`${this.url}/loginApi`,{headers, responseType: 'text' as 'json'});
  
}
 
loginUser(token: any)
{
    localStorage.setItem("token",token)
    return true;
}

getToken()
{
  return localStorage.getItem("token");
  
}

isLoggedIn(){
  let token = localStorage.getItem("token");
  if(token==undefined || token ==null || token == '')
  {
    console.log("token undefined ",token);
    return false;
  }
  else{
    console.log("token ",token);
    return true;
  }
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem("Full Name");
  localStorage.removeItem("Username");
  localStorage.removeItem("Password");
  localStorage.removeItem("Image URL");
  localStorage.removeItem("Main User");
  localStorage.removeItem("userId");
  
  return true;
}

}
