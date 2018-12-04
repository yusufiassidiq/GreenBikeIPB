import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Data } from '../../provider/data';

@Component({
  selector: 'page-tunggu',
  templateUrl: 'tunggu.html',
})
export class TungguPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TungguPage');
  }

  cancel() {
    this.navCtrl.setRoot(HomePage);
  }

}
