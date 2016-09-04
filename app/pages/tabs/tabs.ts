import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChatPage } from '../chat/chat';
import { BetsPage } from '../bets/bets';
import { GroupsPage } from '../groups/groups';
import { RoundsPage } from '../rounds/rounds';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {
  tab1Root = ChatPage;
  tab2Root = BetsPage;
  tab3Root = GroupsPage;
  tab4Root = RoundsPage;

  constructor(private navCtrl: NavController) {

  }

}
