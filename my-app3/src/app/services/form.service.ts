import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    profession: new FormControl(''),
  })
  
}
