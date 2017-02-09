import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Dynamic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html'
})
export class DynamicPage {
  dynamics = [{
    banner: '../assets/images/dynamic1.png',
    title: '倾情献唱',
    summary: '最流行的的歌曲,最动人的音乐,一曲挽歌醉人心旋。'
  }, {
    banner: '../assets/images/dynamic2.png',
    title: '无与伦比的盛宴',
    summary: '来自世界各地的顶尖歌手,齐聚一堂'
  }, {
    banner: '../assets/images/dynamic3.png',
    title: '天堂的乐曲',
    summary: '乡村音乐,爵士,古典,各色歌曲,汇成一片海洋'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DynamicPage');
  }

}
