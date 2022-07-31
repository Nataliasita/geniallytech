import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-library-catalogue',
  templateUrl: './library-catalogue.component.html',
  styleUrls: ['./library-catalogue.component.scss']
})
export class LibraryCatalogueComponent implements OnInit {

  search='cuentos'

  constructor( private booksService:BooksService ) { }

  ngOnInit(): void {+
    this.getbooks()
  }

  getbooks(){
    this.booksService.getBooks(this.search).subscribe(res =>{
      console.log(res,'res')
    })
  }

}
