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
      lastName:'',
      imageUrl:''
  }


  file!: File;
  fileUris: Array<string> = [];

  loginValid = true;

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("form is submitted");
    if((this.credentials.userName!="" && this.credentials.password!="") && (this.credentials.userName!=null && this.credentials.password!=null ))
    {
      
      
      console.log("Credentials are ok, api call made",this.credentials);
      
      

      
      this.registerService.doRegisteration(this.file,this.credentials).subscribe(
        (response:any)=>{
          console.log("Successful")
          window.location.href="login";
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

  onFileChange(evt): void {
    console.log('contents of file')
    console.log( evt.target.files[0]);

    this.file = evt.target.files.item(0);

    
  }

}
