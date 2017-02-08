import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BeautyProjects page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-beauty-projects',
  templateUrl: 'beauty-projects.html'
})
export class BeautyProjectsPage {
  beautys = [{
    name: "",
    projects: ["丰唇"]
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeautyProjectsPage');
  }

}
