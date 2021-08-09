import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  title:string = 'Add New Contact';
  constructor() { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    profession: new FormControl(''),
  })
}
