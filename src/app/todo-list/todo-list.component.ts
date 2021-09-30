import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncodedCredentialsFetcherService } from '../encoded-credentials-fetcher.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private encodedCredentialService: EncodedCredentialsFetcherService, private router: Router) { }

  ngOnInit(): void {
    if(this.encodedCredentialService.isCredentialFound()){

    }else{
      this.router.navigateByUrl("/login");
    }
  }

}
