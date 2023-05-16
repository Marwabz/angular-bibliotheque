import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent {
@Input() author?: Author;
@Output() authorsUpdated= new EventEmitter<Author[]>();

constructor(private authorService: AuthorService){}

ngOnInit(): void{}

updateAuthor(author: Author){
this.authorService
 .updateAuthor(author)
 .subscribe((authors: Author[]) => this.authorsUpdated.emit(authors));
}

createAuthor(author: Author){
  this.authorService
   .createAuthor(author)
   .subscribe((authors: Author[]) => this.authorsUpdated.emit(authors));
}

deleteAuthor(author: Author){
  this.authorService
   .deleteAuthor(author)
   .subscribe((authors: Author[]) => this.authorsUpdated.emit(authors));
}

}


