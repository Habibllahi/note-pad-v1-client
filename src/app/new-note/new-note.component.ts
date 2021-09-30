import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncodedCredentialsFetcherService } from '../encoded-credentials-fetcher.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  constructor(private encodedCredentialService: EncodedCredentialsFetcherService, private router: Router) { }

  ngOnInit(): void {
    if(this.encodedCredentialService.isCredentialFound()){

    }else{
      this.router.navigateByUrl("/login");
    }
  }

}
