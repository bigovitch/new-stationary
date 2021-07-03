import { Injectable } from '@angular/core';
import { Books } from 'src/app/interfaces/books';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Books[] = [
    { id: 1, type: "adventure"},
    { id: 2, type: "cartoon"},
    { id: 3, type: "novels"},
  ];

  constructor() { }
}
