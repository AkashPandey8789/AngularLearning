import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
              <h1>{{pageHeader}}</h1>
              <app-student></app-student>
              </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldApp';
  pageHeader:String="Student Details";
}
