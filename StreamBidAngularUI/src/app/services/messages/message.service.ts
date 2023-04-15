import { HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';

declare var Stomp;




@Injectable({
  providedIn: 'root'
})



export class MessageService implements OnInit{
 

  messageObj = {
    fullName : '',
    message : '',
    date: new Date(), 
    imageUrl : ''
  }

  nameChange: Subject<string> = new Subject<string>();  
  constructor() {
    this.mainUser=true;
    this.initializeWebSocketConnection();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  public stompClient;
  public userMessage ;
  public msg =[];
  public chatUser :string;

  public mainUser : boolean;//Boolean(JSON.parse(localStorage.getItem("Main User")));
  
  initializeWebSocketConnection() {
    const serverUrl = "http://localhost:8082/socket";
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    this.chatUser = localStorage.getItem("Full Name");
    
    const that = this;
    //var auth = 'Basic ' + new Buffer(localStorage.getItem("Username") + ':' + localStorage.getItem("Password")).toString('base64');
    //+window.btoa(localStorage.getItem("Username") + ":" + localStorage.getItem("Password"))+
    
    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer ' + (localStorage.getItem('token'))
   });
   

   
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      
      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          let jsonObj = JSON.parse(message.body); 
           this.userMessage = jsonObj 
          console.log('this.userMessage  '+JSON.stringify(this.userMessage));
          if(this.userMessage.fullName == localStorage.getItem("Full Name"))
          { 
             this.userMessage.mainUser =true; 
          }
          else
          {
             this.userMessage.mainUser = false;                 
          }
          that.msg.push(this.userMessage);
        }
      });
    });
    
  }

  sendMessage(message) {
    this.messageObj.fullName = localStorage.getItem("Full Name");
    this.messageObj.message = message;
    this.messageObj.date = new Date();
    this.messageObj.imageUrl = localStorage.getItem("Image URL");
   
  
    this.stompClient.send('/app/send/message' , {}, JSON.stringify(this.messageObj));
  }

 


}
