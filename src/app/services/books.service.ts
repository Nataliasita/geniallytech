import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(search:string){
    const path = `https://www.etnassoft.com/api/v1/get/?any_tags=[${search}]&order=newest`;
    return this.http.get(path).pipe(
      map((response) => {
        return response;
      })

    )
  }
    

}
