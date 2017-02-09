import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the Signin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  user = { username: "13212780816", password: "" };
  phoneReg = /^1[3-9]\d{9}/;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  login() {
    if (this.phoneReg.test(this.user.username)) {
      this.navCtrl.setRoot(TabsPage);
    } else {
      this.showError('请输入正确的手机号');
    }

  }

  goForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage)
  }
  goSignup() {
    this.navCtrl.push(SignupPage);
  }



  showError(error: string, time = 2000) {
    this.alertCtrl.create({
      title: "提示",
      subTitle: error,
      buttons: ['确定']
    }).present();
  }


}
