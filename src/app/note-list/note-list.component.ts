import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/types/Note';
import { EncodedCredentialsFetcherService } from '../encoded-credentials-fetcher.service';
import { NotesService } from '../notes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  public notes: Note[] = []

  constructor(private noteService: NotesService, private route: Router, private encodedCredentialService: EncodedCredentialsFetcherService) { }

  ngOnInit(): void {
    if(this.encodedCredentialService.isCredentialFound()){
      this.loadPageContent();
    }else{
      this.route.navigateByUrl("/login")
    }
  }

  private loadPageContent():void{
    this.noteService.fetchNotes().pipe<Note[]>(//trim each note body to 100 characters with endling ....
      map<Note[],Note[]>(
        (notes, index) => {
          return notes.map<Note>(
            (note,position,notes)=>{
              note.body = note.body.substring(0,100)+"......"
              return note;
            }
          )
        }
    )).subscribe(notes => this.notes = notes);
  }

}
