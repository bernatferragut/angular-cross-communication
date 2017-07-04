import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // parentMsg: string = 'P>C Msg';

  messageRecieved: string;

  recieveMesage($event) {
    this.messageRecieved = $event;
  }

}
