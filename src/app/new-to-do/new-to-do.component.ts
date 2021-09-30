import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncodedCredentialsFetcherService } from '../encoded-credentials-fetcher.service';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {

  constructor(private encodedCredentialService: EncodedCredentialsFetcherService,private router: Router) { }

  ngOnInit(): void {
    if(this.encodedCredentialService.isCredentialFound()){

    }else{
      this.router.navigateByUrl("/login");
    }
  }

}
