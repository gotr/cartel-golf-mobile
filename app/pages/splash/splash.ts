import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage, LocalStorage } from 'ionic-angular';
import { RealtimeDataService } from '../../providers/realtime-data-service/realtime-data-service';

import { SignupInvitePage } from '../signup-invite/signup-invite';

@Component({
  templateUrl: 'build/pages/splash/splash.html'
})
export class SplashPage {
  localStorage: Storage = new Storage(LocalStorage);
  token: any;
  splashTime: Number = 4000;
  splashPromise: Promise<any>;
  dataPromise: Promise<any>;

  constructor(public navCtrl: NavController, public realtimeData: RealtimeDataService) {}

  ionViewWillEnter() {

    // if there's a user token load the realtime data
    this.dataPromise = new Promise(resolve => {
      this.localStorage.get('token').then(token => {
        if (token) {
          this.realtimeData.load(token).then(data => {
            resolve(data);
          });
        } else {
          resolve(null);
        }
      });
    });

    // show splash for a min amount of time
    this.splashPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, this.splashTime);
    });

    Promise.all([this.splashPromise, this.dataPromise]).then(ret => {
      if (ret[1]) {
        console.log(ret[1]);
        // move to Rounds page
        console.log('move to rounds page');
      } else {
        // move to SignupInvite page
        this.navCtrl.setRoot(SignupInvitePage);
      }
    });

  }

}
