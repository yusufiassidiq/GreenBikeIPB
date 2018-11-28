import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { DetailSepedaPage } from '../detail-sepeda/detail-sepeda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  detailSepeda() {
    this.app.getRootNav().push(DetailSepedaPage);
  }
}
