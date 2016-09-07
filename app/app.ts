import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {provideStore} from '@ngrx/store';
import {RoundActions} from './state/actions/round-actions';
import {RoundsReducer} from './state/reducers/rounds-reducer';

import {RealtimeDataService} from './providers/realtime-data-service/realtime-data-service';
import {SplashPage} from './pages/splash/splash';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = SplashPage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
  RealtimeDataService,
  provideStore({rounds: RoundsReducer}),
  RoundActions
]);
