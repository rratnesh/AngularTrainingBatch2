import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        country: new FormControl('', [Validators.required])
      }),
      company: new FormArray([])
    });
  }

  show() {
    console.log(this.form);
  }

  addCompany(){
    
  }

  disableRequired() {
    this.email.setValidators([]);
    this.email.updateValueAndValidity();
  }


  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password');
  }

  get city() {
    return this.form.get('address').get('city');
  }

  get country() {
    return this.form.get('address').get('country');
  }

}
