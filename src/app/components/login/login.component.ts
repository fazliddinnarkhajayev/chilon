import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  login: string
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form: any): void {
    console.log(form.value)
  }

}
