import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public logHeaders(httpHeaders: HttpHeaders,...headers: string[]){
    headers.forEach((header,index,headers)=>{
      console.log(httpHeaders.get(header));
    });
  }

  public log(value: string[] | null |string){
    console.log(value);
  }

}
