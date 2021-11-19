import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
              <img src={{imgString}}/>
              <h1>{{pageHeader}}</h1>
              <app-student></app-student>
              <p>Salary: {{salary}}</p>
              <p>10% of Salary: {{salary*.1}}</p>
              </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldApp';
  pageHeader:String="Student Details";
  imgString:String='https://dotnettutorials.net/wp-content/uploads/2019/09/cropped-dotnettutorials.png';
  salary:number=500000;
}
