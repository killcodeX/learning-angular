import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';
  birthday=Date.now();
  users = [
    {
      user:'Saitama',
      age:26,
      work:'One Puch Man'
    },
    {
      user:'Eren Yeager',
      age:16,
      work:'Attack on Titans'
    },
    {
      user:'Naruto',
      age:28,
      work:'Naruto'
    }
  ]

  parentComponent(data : any){
    console.log(data)
  }
}
