import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage, LocalStorage } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/splash/splash.html'
})
export class SplashPage {
  local: Storage = new Storage(LocalStorage);
  token: any;
  minSplashTime: Number = 5000;
  p1: Promise<any>;
  p2: Promise<any>;

  constructor(public navCtrl: NavController) {
    // grab user's token from localstorage
    this.local.get('token')
    .then(token => {
      console.log(token)
      
    });

    this.p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('time to change view');
        resolve();
      }, this.minSplashTime);
    });

  }
}
