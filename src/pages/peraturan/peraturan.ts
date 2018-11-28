import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { TungguPage } from '../tunggu/tunggu';

@Component({
  selector: 'page-peraturan',
  templateUrl: 'peraturan.html',
})
export class PeraturanPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeraturanPage');
  }

  pinjam(){
    this.app.getRootNav().push(TungguPage);
  }

}
