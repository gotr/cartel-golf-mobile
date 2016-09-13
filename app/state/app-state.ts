import {Round} from '../models/round';

export interface AppState {
  rounds: Round[];
  pendingRound: null;
}