import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService)
    {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newRequest = req;
        let token = this.loginService.getToken();
        console.log("token in intercept: ",token)

        if(token!=null)
        {   
            console.log("In if of interceptor")
            newRequest =  newRequest.clone({setHeaders:{Authorization : `Bearer ${token}`}})
        } 

        return next.handle(newRequest);
    }

}