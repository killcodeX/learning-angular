import { Component, OnInit, Input } from '@angular/core';
import { contactInterface } from 'src/mockData';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title: string = 'List Of Contacts'
  @Input() contacts! : contactInterface[];
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.contacts)
  }
}
