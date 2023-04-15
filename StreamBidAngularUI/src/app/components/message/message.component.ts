import {  Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/messages/message.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  title = 'websocket-frontend';
  
  


  input;
  constructor(public messageService: MessageService) {

    

  }


  ngOnInit(): void {
   
   
  }
  
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  
  
  
} 