import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreatDetailPage } from '../treat-detail/treat-detail';

/*
  Generated class for the ViewHistory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-history',
  templateUrl: 'view-history.html'
})
export class ViewHistoryPage {
  customer = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customer = this.navParams.data;
    console.log(this.customer);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewHistoryPage');
  }

  goTreatedDetail() {
    this.navCtrl.push(TreatDetailPage, this.customer);
  }


}
