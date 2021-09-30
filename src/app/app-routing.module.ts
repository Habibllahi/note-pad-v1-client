import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NewToDoComponent } from './new-to-do/new-to-do.component';
import { NoteListComponent } from './note-list/note-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'register',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'note-list',
    component : NoteListComponent
  },
  {
    path : 'todo-list',
    component : TodoListComponent
  },
  {
    path : 'new-note',
    component : NewNoteComponent
  },
  {
    path : 'new-to-do',
    component : NewToDoComponent
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
