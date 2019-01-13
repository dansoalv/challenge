import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FirebaseService]
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(private _authService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._authService
      .login(this.email, this.password)
      .then(res => {
        localStorage.setItem('token', this.email);
        this.router.navigate(['dashboard']);
      })
      .catch(err => console.log(err.message));
  }
}
