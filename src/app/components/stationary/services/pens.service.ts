import { Injectable } from '@angular/core';
import { Pens } from 'src/app/interfaces/pens';

@Injectable({
  providedIn: 'root'
})
export class PensService {

  pens:Pens[]=[
    { id:1 , type:"markers"},
    { id:2 , type:"pencil crayons"},
    { id:3 , type:"pastels"},
  ];

  constructor() { }
}
