import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Note } from 'src/types/Note';
import {map} from 'rxjs/operators'
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class NotesCachingInterceptorService implements HttpInterceptor{
  private cache: Map<HttpRequest<Note[]>, HttpResponse<Note[]>> = new Map();

  constructor(private logger: LoggerService){}
  
  intercept(req: HttpRequest<Note[]>, next: HttpHandler): Observable<HttpEvent<Note[]>>{
    if(req.method === "GET" && req.url === "https://notepadv1.herokuapp.com/api/v1/notes") {
      const cachedResponse: HttpResponse<Note[]> | undefined = this.cache.get(req);
      if(cachedResponse) {
          return of(cachedResponse.clone())
      }else {
          this.logger.log("NotesCahingInterceptor --> No cachedResponse for Notes, directing request to Server");
          return next.handle(req).pipe(
              map((stateEvent) => {
                  this.cache.set(req, stateEvent as HttpResponse<Note[]>)
                  return stateEvent as HttpResponse<Note[]>;
              })
          )
      }
        
    }else{
      this.logger.log('NotesCahingInterceptor --> request not worked on by me');
      return next.handle(req) //let the request go to next handler
    }
  }    
}
