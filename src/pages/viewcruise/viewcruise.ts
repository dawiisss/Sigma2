import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-viewcruise',
  templateUrl: 'viewcruise.html'
})
export class ViewCruise {
  cruiseList: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,  public firebaseProvider: FirebaseProvider) {
    //this.cruiseList = this.firebaseProvider.getCruiseList();
  }

}
