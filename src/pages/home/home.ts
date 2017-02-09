import { Component } from '@angular/core';

import { NavController, ActionSheetController } from 'ionic-angular';
import { IndexPage } from '../index/index';
import { MessagePage } from '../message/message';
import { StatePage } from '../state/state';
import { MytimePage } from '../mytime/mytime';
import { MyCustomerPage } from '../my-customer/my-customer';
import { AddCustomerPage } from '../add-customer/add-customer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  avatar = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtz2uemEb7YMfqXFIfL6rQ8IXVnPZxDvqHN7lgBorPH29fCD3M1haaSpA";

  message: MessagePage;

  constructor(public navCtrl: NavController, public actionCtrl: ActionSheetController) {

  }

  goStatePage() {
    this.navCtrl.push(StatePage);
  }

  goMytime() {
    this.navCtrl.push(MytimePage);
  }
  goMyCustomer() {
    this.navCtrl.push(MyCustomerPage);
  }

  actionAvatar(fileInput) {
    this.actionCtrl.create({
      title: '修改头像',
      buttons: [{
        text: '从图库中选取',
        handler: () => {
          fileInput.click();
        }
      }, {
        text: '从手机相册中选取',
        handler: () => {
          fileInput.click();
        }
      }, {
        text: '拍照选取',
        hanlder: () => {
          fileInput.click();
        }
      }]
    }).present();
  }

  goAddCustomer() {
    this.navCtrl.push(AddCustomerPage);
  }

  changeAvatar(fileInput: HTMLInputElement) {
    var file = fileInput.files[0];
    if (!file) return 0;

    var reader = new FileReader();
    reader.onload = (event) => {
      this.avatar = event.target['result'];
    }
    reader.readAsDataURL(file);
  }


}

