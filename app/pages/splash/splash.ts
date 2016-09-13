import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Storage, LocalStorage } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SignupInvitePage } from '../signup-invite/signup-invite';
import constants from '../../common/constants';

@Component({
  templateUrl: 'build/pages/splash/splash.html'
})
export class SplashPage {
  localStorage: Storage = new Storage(LocalStorage);
  token: string;
  splashTime: number = 4000;
  splashPromise: Promise<any>;
  signinPromise: Promise<any>;

  constructor(public navCtrl: NavController, public http: Http) {}

  ionViewWillEnter() {
    // if there's a user token load the realtime data
    this.signinPromise = new Promise(resolve => {
      this.localStorage.get('token').then(token => {


// debugging
// token = '57d0aac88331f209548940e0'

        if (token) {
          this.http.post(constants.HOST + '/api/signin', {
            token: token
          }).subscribe( (res: Response) => {
            let data = res.json();
            // data will contain
            //    - rounds[Round]
            //    - nickname
            //    - cartelName
            resolve(true);
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

    Promise.all([this.splashPromise, this.signinPromise]).then(ret => {
      // check if we have data
      if (ret[1]) {
        // move to TabsPage, which defaults to the rounds tab
        this.navCtrl.setRoot(TabsPage);
      } else {
        // move to SignupInvitePage
        this.navCtrl.setRoot(SignupInvitePage);
      }
    });

  }

}
