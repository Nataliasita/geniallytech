import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-library-catalogue',
  templateUrl: './library-catalogue.component.html',
  styleUrls: ['./library-catalogue.component.scss']
})
export class LibraryCatalogueComponent implements OnInit {

  search:any;
  noSearch:boolean=false;
  allBooks:any;

  constructor( private booksService:BooksService ) { }

  ngOnInit(): void {

  }

  getbooks(val:string){
    this.booksService.getBooks(val).subscribe(res =>{
      console.log(res,'res')
      this.allBooks=res;
      if(this.allBooks.length == 0){
        this.noSearch= true;
      }else{
        this.noSearch=false;
      }
    })
  }

  searchLibrary(value:string){
    console.log(value,'asdsadsad')

    this.getbooks(value)

  }

}
