import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoteListComponent } from './note-list/note-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewNoteComponent } from './new-note/new-note.component';
import { NewToDoComponent } from './new-to-do/new-to-do.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { NotesCachingInterceptorService } from './notes-caching-interceptor.service';
import { NotesService } from './notes.service';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    TodoListComponent,
    NewNoteComponent,
    NewToDoComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotesCachingInterceptorService,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
