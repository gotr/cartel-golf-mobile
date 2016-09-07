import {Action, ActionReducer} from '@ngrx/store';

import {RoundActions} from '../actions/round-actions';

export function RoundsReducer(state = [], action) {
  switch (action.type) {
    case RoundActions.ADD_ROUND:
      return [...state, Object.assign({}, action.payload)];

    default:
      return state;
  }
}