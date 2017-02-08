import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { TreatDetailPage } from '../treat-detail/treat-detail';

/*
  Generated class for the State page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-state',
  templateUrl: 'state.html'
})
export class StatePage {
  // toTreat,treated,toCure,Cured;
  selectedState = "toTreat";
  data = {
    toTreats: [],
    treateds: [],
    toCures: [],
    cureds: []
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('assets/data/state.json').subscribe(rtn => {
      this.data = rtn.json();


    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatePage');
  }

  // 预约治疗
  orderTreat(toTreat) {
    var index = this.data.toTreats.indexOf(toTreat);
    this.data.toTreats.splice(index, 1);
    this.data.treateds.push(toTreat);

  }

  goTreatedDetail(treated) {
    this.navCtrl.push(TreatDetailPage, treated);

  }
}
