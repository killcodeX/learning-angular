import { Component, OnInit } from '@angular/core';
import { contacts, contactInterface } from 'src/mockData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts : contactInterface[] = contacts;
  constructor() { }

  ngOnInit(): void {
  }

}
