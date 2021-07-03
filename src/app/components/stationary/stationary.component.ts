import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interfaces/books';
import { Frames } from 'src/app/interfaces/frames';
import { Pens } from 'src/app/interfaces/pens';
import { BooksService } from './services/books.service';
import { FramesService } from './services/frames.service';
import { PensService } from './services/pens.service';

@Component({
  selector: 'app-stationary',
  templateUrl: './stationary.component.html',
  styleUrls: ['./stationary.component.css']
})
export class StationaryComponent implements OnInit {

  books?:Books[];
  pens?:Pens[];
  frames?:Frames[];

  constructor( private booksService:BooksService , private pensService:PensService , private framesService:FramesService) {
    this.books = booksService.books;
    this.pens = pensService.pens;
    this.frames = framesService.frames;
   }

  ngOnInit(): void {
  }

}
