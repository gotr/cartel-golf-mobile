import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

import {Socket} from './socket';
import messageTypes from './message-types';

@Injectable()
export class SocketEmitters {
  socket: any;
  userToken: string;
  resolver: Function = null;

  constructor(public platform: Platform, public skt: Socket) {
    this.socket = Socket.getInstance();
  }

  signOn(token: string): Promise<Object> {
    this.userToken = token;
    // signing in will return result in a set-rounds message 
    // with all the rounds for user's cartel
    return new Promise(resolve => {
      Socket.resolver = resolve;
      this.socket.emit(messageTypes.signIn, token);
    });
  }

}



