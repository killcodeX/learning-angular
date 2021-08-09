import { Component, OnInit, Input } from '@angular/core';
import { contactInterface } from 'src/mockData';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  panelOpenState = false;
  @Input() contact!: contactInterface
  constructor() { }

  ngOnInit(): void {
  }

}
