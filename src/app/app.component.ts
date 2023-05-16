import { Component } from '@angular/core';
import { Author } from './models/author';
import { AuthorService } from './services/author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bibliotheque-angular';
  authors: Author[]= [];
  authorToEdit?: Author;

  constructor(private authorService: AuthorService){}

  ngOnInit() : void{
    this.authorService.getAuthors()
    .subscribe((result: Author[]) =>(this.authors = result));
  }

  updateAuthorList(authors: Author[]){
    this.authors = authors;

  }

  initNewAuthor(){
    this.authorToEdit = new Author();
  }

  editAuthor(author: Author){
    this.authorToEdit= author;
  }
}
