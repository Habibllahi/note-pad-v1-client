import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodedCredentialsFetcherService {

  constructor() { }

  public fetchAuthorizationValue(): string | null{
    return localStorage.getItem("auth");
  }

  public isCredentialFound() : string | null {
    return this.fetchAuthorizationValue();
  }
}
