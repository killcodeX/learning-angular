import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  inputData = '';
  avatarUrl = '';
  name = '';

  handleInput = (data:any) => {
    this.inputData = data.target.value
  }

  callData = async () => {
    //console.log('clicked')
    let url = `https://api.github.com/users/${this.inputData}`
    await fetch(url)
    .then(res => res.json())
    .then(res => {
      this.avatarUrl = res.avatar_url;
      this.name = res.name;
    })
    .catch(error => console.log(error))
  }
}
