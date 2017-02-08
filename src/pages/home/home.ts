import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { IndexPage } from '../index/index';
import { MessagePage } from '../message/message';
import { StatePage } from '../state/state';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  index: IndexPage;
  message: MessagePage;

  constructor(public navCtrl: NavController) {

  }

  goStatePage() {
    this.navCtrl.push(StatePage);
  }

}
