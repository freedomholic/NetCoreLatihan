import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Log in successfully');
    }, error => {
      console.log('Error');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    /**
     * !!token return or false,
     * jika ada isinya return true dan sebaliknya
     */
    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged Out');
  }
}

