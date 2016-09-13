import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

import messageTypes from './message-types';
import constants from '../../common/constants';

@Injectable()
export class Socket {
  private static _socket: any;
  public static resolver: Function = null;

  constructor(public platform: Platform) {
    // socket represents the connection to the socket.io server
    Socket._socket = io(constants.HOST);
  }

  public static getInstance() {
    return Socket._socket;
  }

}

