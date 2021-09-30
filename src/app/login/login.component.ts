import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/types/Credentials';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentails : Credentials = {
    username: '',
    password: '',
    remember: false
  }

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("auth")!== null){
      this.route.navigateByUrl('/note-list')
    }

  }

  public auth(){
    this.loginService.authenticate(this.credentails);
  }


}
