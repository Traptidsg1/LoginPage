import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppURLconstants } from '../models/app-url-constants.model';
import { Observable } from 'rxjs';
import { GalleryImageCard } from '../models/gallery-image-card/gallery-image-card.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(public httpService: HttpClient) {}

  getAllPhotosByURL(page: number, photoLimit: number):Observable<any> {
    return this.httpService.get(
      AppURLconstants.ALL_PHOTOS + '?page = ' + page + '&limit=' + photoLimit
    );
  }
}

//         //  let instABC = new ABC()
//         //  instABC.setIntegerValue(10);
//         //  console.log(instABC.getIntegerValue())
//         //  let instABC1 = new ABC()
//         //  instABC1.setIntegerValue(20);
//         //  console.log(instABC1.getIntegerValue())

//         //  ABC.value1 = 10;
//         //  let statVal = ABC.value1;

// class ABC {
//    private integerValue = 10;

//    static value1 = 10;
//    static Method1(val1:number){
//     ABC.value1 = val1

//    }
//   getIntegerValue(){
//     return this.integerValue
//   }

//   setIntegerValue(value:number){

//     this.integerValue = value
//   }
// }
