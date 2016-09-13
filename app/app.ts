import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {provideStore} from '@ngrx/store';
import {RoundActions} from './state/actions/round-actions';
import {RoundsReducer} from './state/reducers/rounds-reducer';

import constants from './common/constants';
import {Socket} from './providers/realtime/socket';
import {SocketEmitters} from './providers/realtime/socket-emitters';
import {SocketListeners} from './providers/realtime/socket-listeners';

import {SplashPage} from './pages/splash/splash';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = SplashPage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();

      // need to determine dev host or production host
      constants.HOST = platform.is('core') ? constants.DEV_HOST : constants.PRO_HOST;    
    });
  }
}

ionicBootstrap(MyApp, [
  HTTP_PROVIDERS,
  Socket,
  SocketEmitters,
  SocketListeners,
  provideStore({rounds: RoundsReducer}),
  RoundActions
]);
