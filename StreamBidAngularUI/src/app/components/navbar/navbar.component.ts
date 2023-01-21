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
      label: 'Sign Up',
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
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      path:"about",
      logged: true,
      function: '',
      id: "about" 
    },
    {
      label: 'Tickets',
      icon: 'attach_money',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      path:"tickets",
      logged: true,
      function: '',
      id: "ticket" 
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
      label: 'Showcase',
      icon: 'slideshow',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      path : "showcase",
      logged: true,
      function: '',
      id: "showcase" 
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      path:"",
      logged: true,
      function: '',
      id: "blog" 
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
