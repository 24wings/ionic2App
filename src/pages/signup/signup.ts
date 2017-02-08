import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToolService } from '../../providers/tool-service';
import { HomePage } from '../home/home';
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  time = 0;
  user = { username: '', password: '', inputCode: '', getCode: '4453' };
  phoneReg = /^1[3-9]\d{9}$/;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toolService: ToolService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    if (this.phoneReg.test(this.user.username) && this.user.getCode == this.user.inputCode) {
      this.navCtrl.setRoot(HomePage);
    } else {
      var errorMsg = this.phoneReg.test(this.user.username) ? '验证码错误' : '请输入正确的手机号';
      this.toolService.alertError(errorMsg)
    }
  }
  timeoutCode() {
    this.time = 60;
    var timer = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  getCode() {
    this.toolService.alertError('您的验证码是' + this.user.getCode);
    this.timeoutCode();
  }
}
