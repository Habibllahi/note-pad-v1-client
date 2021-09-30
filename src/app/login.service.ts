import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticate } from 'src/types/Authenticate';
import { Credentials } from 'src/types/Credentials';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _authenticated: boolean = false;
  private _rememberMe: boolean = false;
  private _loginURL = "https://notepadv1.herokuapp.com/api/v1/users/authenticate";
  constructor(private route: Router, private http: HttpClient, private logger: LoggerService) { 
    
  }
  
  public authenticate(credentails:Credentials): void{
    const encodedCredentials: string = `Basic ${btoa(credentails.username+":"+credentails.password)}`;
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders
      .set("Authorization",encodedCredentials)
      .set("Accept","application/json")
      .set("Content-Type","application/json");
    this.rememberMe = credentails.remember; 
    this.logger.logHeaders(httpHeaders,"Authorization","Accept","Content-Type")
    this.http.get<Authenticate>(
      this._loginURL,
      {
      headers:httpHeaders,
      observe: 'response'
      }
    ).subscribe(authenticate => {
      let v = authenticate.headers.getAll('Set-Cookie');
      this.logger.log(v);
      const state: boolean = authenticate.body? authenticate.body.user_exist : false;
      if(state){
        localStorage.setItem("auth",encodedCredentials);
        this.route.navigateByUrl('/note-list');
      }
    },(error => {
      console.error(error)
    }));
  }
  

  /*getters and setters */
  public set authenticated(value : boolean) {
    this._authenticated = value;
  }

   
  public get authenticated() : boolean {
    return this._authenticated;
  }
  
  
  public set rememberMe(value : boolean) {
    this._rememberMe = value;
  }

  
  public get rememberMe() : boolean {
    return this._rememberMe;
  }
  
  
}
