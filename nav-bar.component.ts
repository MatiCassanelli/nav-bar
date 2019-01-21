import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreakpointState, Breakpoints, BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogged = false;
  options: FormGroup;

  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    this.authService.isLoggedIn().subscribe(res => {
      if (res) {
        console.log(res);
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }

  logOut() {
    this.authService.logout();
  }

}
