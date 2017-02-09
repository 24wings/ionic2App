import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MessageDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-message-detail',
  templateUrl: 'message-detail.html'
})
export class MessageDetailPage {
  customer = { messages: [] };
  isTyping = true;
  typingMessage = "";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customer = this.navParams.data;
    console.log(this.customer);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageDetailPage');
  }

  sendMessage() {
    this.customer.messages.push({
      sender: 'me',
      time: this.getDateTime(),
      content: this.typingMessage,
      type: 'text'
    });
    this.typingMessage = '';

  }

  sendImage(fileInput: HTMLInputElement) {
    var file = fileInput.files[0];
    if (!file) return 0;

    var reader = new FileReader();
    reader.onload = (event) => {
      this.customer.messages.push({
        sender: 'me',
        time: this.getDateTime(),
        content: event.target['result'],
        type: 'image'
      });
    }
    reader.readAsDataURL(file);
  }

  getDateTime() {
    var dt = new Date;
    return `${dt.getHours()} ${dt.getMinutes()}`
  }

}
