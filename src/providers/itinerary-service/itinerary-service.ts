import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ItineraryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItineraryServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ItineraryServiceProvider Provider');
  }

}
