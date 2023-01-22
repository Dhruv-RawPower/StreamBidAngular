import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private registerService: RegisterService) { }

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faFaceFrown = faFaceFrown;
  
  credentials = {
      userName : '',
      password : '',
      email:'',
      firstName:'',
      lastName:''
  }

  loginValid = true;

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("form is submitted");
    if((this.credentials.userName!="" && this.credentials.password!="") && (this.credentials.userName!=null && this.credentials.password!=null ))
    {
      console.log("Credentials are ok, api call made");
      this.registerService.doRegisteration(this.credentials).subscribe(
        (response:any)=>{
          console.log("Successful")
          //window.location.href="dashboard";
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
