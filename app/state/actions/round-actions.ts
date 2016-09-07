import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Round} from '../../models/round';

@Injectable()
export class RoundActions {
  
  static ADD_ROUND = 'ADD_ROUND';
  addRound(round: Round): Action {
    return {
      type: RoundActions.ADD_ROUND,
      payload: round
    };
  }

}