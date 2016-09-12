import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

import {RealtimeDataService} from '../../providers/realtime-data-service/realtime-data-service';

/*
  Generated class for the SignupInvitePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup-invite/signup-invite.html'
})
export class SignupInvitePage {

  tokenForm: FormGroup;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {
    this.tokenForm = formBuilder.group({  
      'tokenInput': ['', Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])]
    });
  }

  onSubmit(formData) {
    console.log(formData);
  }

}
