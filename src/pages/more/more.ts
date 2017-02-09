import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';



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
  customer = {
    avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtz2uemEb7YMfqXFIfL6rQ8IXVnPZxDvqHN7lgBorPH29fCD3M1haaSpA',
    username: '',
    tags: ['美容', '美发', '去毛'],
    workYears: 8
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public actionCtrl: ActionSheetController) {

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
    this.alertCtrl.create({
      title: '新增标签',
      inputs: [{
        name: 'tag',
        placeholder: '新标签的名字'
      }],
      buttons: [{
        text: '取消'
      }, {
        text: '确定',
        handler: (data) => {
          this.customer.tags.push(data.tag);
        }
      }]
    }).present();


  }

  deleteTag(tag) {
    this.customer.tags.splice(this.customer.tags.indexOf(tag), 1);
    console.log(tag)
  }

  showAvatarAction(fileInput: HTMLInputElement) {
    this.actionCtrl.create({
      title: '修改头像',
      buttons: [
        {
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
          text: '从聊天记录中选取',
          handler: () => {
            fileInput.click();
          }
        },
        {
          text: '取消',
          role: 'cancel',
        }
      ]
    }).present();
  }

  changeAvatar(fileInput: HTMLInputElement) {
    var file = fileInput.files[0];
    if (!file) return 0;
    var reader = new FileReader();
    reader.onload = (event) => {
      this.customer.avatar = event.target['result'];
      console.log(this.customer.avatar)
    }
    reader.readAsDataURL(file);
  }

}
