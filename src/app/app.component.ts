import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from 'src/types/Link';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links : Link[] = [{
    title : "note list",
    fragment : "note-list"
  },
  {
    title : "to-do list",
    fragment : "todo-list"
  },
  {
    title : "new note",
    fragment : "new-note"
  },
  {
    title : "new to-do",
    fragment : "new-to-do"
  }]

  constructor(private router: Router, private loginService: LoginService){

  }

  public logOut(){
    if(this.loginService.rememberMe){
      this.router.navigateByUrl('/login');
    }else{
      localStorage.removeItem('auth');
      this.router.navigateByUrl('/login');
    }
    
  }
}
