import { Injectable } from '@angular/core';
import * as data from '../../assets/styleConfig.json';
@Injectable({
  providedIn: 'root'
})
export class StyleService {

  data = data
  constructor() { }

  logData(){
    console.log(this.data.Style[0].bodyColor)
  }
}
