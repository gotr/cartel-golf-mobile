import { Injectable } from '@angular/core';

import {Socket} from './socket';
import messageTypes from './message-types';

@Injectable()
export class SocketListeners {
  socket: any;

  constructor(public skt: Socket) {
    this.socket = Socket.getInstance();

    // This will be trigger after siging in
    this.socket.on(messageTypes.setRounds, rounds => {
      console.log('socket.on("set-rounds" fired')
      Socket.resolver(rounds);
    });
  }



}



