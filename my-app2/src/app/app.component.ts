import { Component } from '@angular/core';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';
  inputData = '';
  avatar = '';
  userName= '';

  constructor(private heroService: HeroService){
  }

  setInput(data : any){
    this.inputData= data.target.value
  }

  displayData(){
    this.heroService.getTask(this.inputData).subscribe(data =>{
      console.log(data)
      this.avatar = data.avatar_url
      this.userName = data.name
    })
  }
}
