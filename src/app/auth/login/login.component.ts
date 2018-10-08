import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formOptions: FormGroup;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formOptions = this.formBuilder.group({
      floatLabel: 'auto'
    });
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.loginForm);
  }

}
