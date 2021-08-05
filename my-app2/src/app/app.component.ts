import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';
  name : String = '';
  password: any = '';
  phone: any = '';
  terms: boolean = false;

  getName(data: any){
    this.name = data.target.value
  }

  getPassword(data: any){
    this.password = data.target.value
  }

  getPhone(data: any){
    this.phone = data.target.value
  }

  getTerms(data: any){
    this.terms = data.target.checked
  }

  printValues(event : any){
    event.preventDefault();
    console.log('name', this.name)
    console.log('name', this.password)
    console.log('name', this.phone)
    console.log('name', this.terms)
  }

}
