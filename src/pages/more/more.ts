import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';



/*
  Generated class for the More page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {
  customer = { username: '', tags: ['手术', '医疗'] };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');

  }
  changeName() {
    this.alertCtrl.create({
      title: '修改用户名',
      inputs: [
        {
          name: 'username',
          placeholder: '请输入新的用户名',
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: () => {

          }
        },
        {
          text: '确定',
          handler: (data) => {
            this.customer.username = data.username;
          }
        }
      ]
    }).present();
  }

  addTag() {


  }
}
