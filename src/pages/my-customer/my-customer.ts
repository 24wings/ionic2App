import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { MessageDetailPage } from '../message-detail/message-detail';
import { ViewHistoryPage } from '../view-history/view-history';

/*
  Generated class for the MyCustomer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-customer',
  templateUrl: 'my-customer.html'
})
export class MyCustomerPage {
  customers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('assets/data/my-customer.json').subscribe(rtn => {
      this.customers = rtn.json().customers;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCustomerPage');
  }

  goMessageDetail(customer) {
    this.navCtrl.push(MessageDetailPage, customer);
  }

  goViewHistory(customer) {
    this.navCtrl.push(ViewHistoryPage, customer);

  }


}
