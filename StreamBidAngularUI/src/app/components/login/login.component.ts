import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  constructor(private loginService: LoginService) { }

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faFaceFrown = faFaceFrown;
  
  credentials = {
      username : '',
      password : ''
  }

  loginValid = true;

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("form is submitted");
    if((this.credentials.username!="" && this.credentials.password!="") && (this.credentials.username!=null && this.credentials.password!=null ))
    {
      console.log("Credentials are ok, api call made");
      this.loginService.doLogin(this.credentials).subscribe(
        (response:any)=>{
          console.log(response.token);

          this.loginService.loginUser(response.token)
          this.loginValid=true;
          window.location.href="dashboard";
        },
        error=>{
          this.loginValid = false;
          console.log(error);
          
        }
      );
    
        


    }else
    {
      console.log("Credentials are missing");
    }

  }

}
