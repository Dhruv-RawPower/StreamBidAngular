import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';



export interface MenuItem {
  label: string;
  icon: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
  path: string;
  logged: boolean;
  function: string;
  id: string;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit,AfterViewInit  {

  
  menuItems: MenuItem[] = [
    {
      label: 'Sign In',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      path: "login",
      logged: true,
      function: '',
      id: "sign" 
    },
    {
      label: 'Dashboard',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      path: "dashboard",
      logged: true,
      function: '',
      id: "dashboard" 
    },
    {
      label: 'Sign Up',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      path: "register",
      logged: true,
      function: '',
      id: "register" 
    },
   
    
  ];

 /*{
      label: 'Logout',
      icon: 'lock',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true,
      path: "",
      logged: true,
      function: 'logoutUser()'  
    },*/

  
  
  @ViewChild('logout', { static: false }) public mydiv2: ElementRef | undefined;  
  
  
  
  
  
  
  
  public loggedIn = false;
  constructor(private loginService:LoginService) {
    
  }
  ngAfterViewInit(): void {
    
    console.log("GG 2",this.mydiv2);
   
    var element = document.getElementById('sign');
    console.log("Boolean ",this.loggedIn)
    if(this.loggedIn)
    {
      //element.remove();
    
    }
    
    
  }
    
  ngOnInit(): void {
    
    this.loggedIn=this.loginService.isLoggedIn()

  }
  
  


  logoutUser(){
    this.loginService.logout();
    location.reload();
  }

  
       

}
