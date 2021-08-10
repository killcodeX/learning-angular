import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  title:string = 'Add New Contact to the List';

  constructor(public formService: FormService, private router: Router) { }

  ngOnInit(): void {
  }

  onAdd(data: any){
    this.formService.onSubmit(data)
    this.router.navigateByUrl('/')
  }

}
