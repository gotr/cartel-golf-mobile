import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Injectable()
export class RealtimeDataService {
  data: any;
  socket: any;

  constructor(public platform: Platform) {
    
    this.data = null;

    // use a local server for socket.io when in development
    let host = platform.is('core') ?
      'http://localhost:8080' : 'https://golfontherocks.com';
    
    // socket represents the connection to the socket.io server
    this.socket = io(host);

  }

  load(token: String): Promise<Object> {
    
    if (this.data) return Promise.resolve(this.data);

    return new Promise(resolve => {
      setTimeout(() => {
        console.log('RealtimeDataService loaded data');
        resolve({msg: 'RealtimeDataServices  data'});
      }, 3000);
    });
  
  }

}

