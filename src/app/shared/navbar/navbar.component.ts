import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: FirebaseService, private _router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this._authService.logout();
    localStorage.clear();
    this._router.navigate(['login']);
  }

}
