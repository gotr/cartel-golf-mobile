import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SplashPage } from './pages/splash/splash';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = SplashPage;
  socket: any;

  constructor(public platform: Platform) {
    platform.ready().then(() => {

    // use a local server when in development
    let host = platform.is('core') ?
      'http://localhost:8080' : 'https://golfontherocks.com';
      // socket represents the connection to the socket.io server
      this.socket = io(host);

      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
