import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

export interface ChatFriends {
  id: string;
  firstName: string;
  lastName: string;
  
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{

  id:any;

  constructor( private dashboardService: DashboardService,public router: Router) { }
  

  chatFriends: ChatFriends[] = [] ;


  ngOnInit(): void {

    this.id = localStorage.getItem("ticketId");

    console.log("ID: ",this.id);  
    this.dashboardService.getAllUsers().subscribe(

      (response:any)=>{
        
       console.log("Response ",response);
       for (let index = 0; index < response.length; index++) {
          
        this.chatFriends[index] = {id:response[index].id , firstName: response[index].firstName, lastName : response[index].lastName};
        
        console.log(response[index].eventName);
        
      }


      },
      (      error: any)=>{
        console.log(error)
      }

    );

    


  }

  
  openChatRoom(id: any){
    console.log(id);
    localStorage.setItem("userId",id)
    this.router.navigate(['messages']);
        
  }

}
