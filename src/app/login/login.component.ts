import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FirebaseService]
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public loading = false;
  constructor(private _authService: FirebaseService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this._authService
      .login(this.email, this.password)
      .then(res => {
        localStorage.setItem('token', this.email);
        this.router.navigate(['dashboard']);
      })
      .catch(err => {
        this.loading = false;
        this.snackBar.open('Usurio y/o contraseña incorrectos', null, {
          duration: 2000,
        });
        console.log(err.message);
      });
  }
}
