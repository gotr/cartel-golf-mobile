import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Injectable()
export class RealtimeDataService {
  data: any;
  socket: any;
  userToken: String;
  resolver: Function = null;

  constructor(public platform: Platform) {
    this.data = null;

    // use a local server for socket.io when in development
    let host = platform.is('core') ?
      'http://localhost:8080' : 'https://golfontherocks.com';
    
    // socket represents the connection to the socket.io server
    this.socket = io(host);

    // socket event listeners
    this.socket.on('all-data', data => {
      this.data = data;
      this.resolver(this.data);
      this.resolver = null;
    });
  }

  load(token: String): Promise<Object> {
    this.userToken = token;
    // data has already been initialized   
    if (this.data) return Promise.resolve(this.data);

    // get all data from server for user's cartel
    return new Promise(resolve => {
      this.resolver = resolve;
      this.socket.emit('all-data', token);
    });
  }



}

