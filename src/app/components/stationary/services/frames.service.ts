import { Injectable } from '@angular/core';
import { Frames } from 'src/app/interfaces/frames';

@Injectable({
  providedIn: 'root'
})
export class FramesService {
  frames:Frames[]=[
    {id:1 , type:"small"},
    {id:2 , type:"medium"},
    {id:3 , type:"large"},
  ]

  constructor() { }
}
