import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from 'src/types/Note';
import { EncodedCredentialsFetcherService } from './encoded-credentials-fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiURI: string = "https://notepadv1.herokuapp.com/api/v1/notes";

  constructor(private httpClient: HttpClient, private encodedCredentials: EncodedCredentialsFetcherService) { }


  public fetchNotes(): Observable<Note[]>{
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders
    .set("Authorization",this.encodedCredentials.fetchAuthorizationValue()!)
    .set("Accept","application/json")
    .set("Content-Type","application/json");
    return this.httpClient.get<Note[]>(
      this.apiURI,
      {
        headers: httpHeaders,
        observe: 'body'
      }
      );
  }
  
}
