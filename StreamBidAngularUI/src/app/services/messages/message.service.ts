import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';

declare var Stomp;
/* 
export interface ChatBox {
  fullName: string;
  message: string;
  date: string;
  mainUser: boolean;
}*/



@Injectable({
  providedIn: 'root'
})



export class MessageService implements OnInit{
 

  messageObj = {
    fullName : '',
    message : '',
    date: new Date(), 
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
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          let jsonObj = JSON.parse(message.body); 
           this.userMessage = jsonObj 
          
          if(this.userMessage.fullName == localStorage.getItem("Full Name"))
          { 
             this.userMessage.mainUser =true; 
          }
          else
          {
             this.userMessage.mainUser = false;                 
          }
          console.log('Mirchi Lagi '+ JSON.stringify(this.userMessage )) 
          that.msg.push(this.userMessage);
        }
      });
    });
    
  }

  sendMessage(message) {
    this.messageObj.fullName = localStorage.getItem("Full Name");
    this.messageObj.message = message;
    this.messageObj.date = new Date();;
    this.stompClient.send('/app/send/message' , {}, JSON.stringify(this.messageObj));
  }

 


}
