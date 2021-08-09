import { Component, OnInit, Input } from '@angular/core';
import { contactInterface } from 'src/mockData';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input() contacts! : contactInterface[];
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.contacts)
  }
}
