import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { DetailSepedaPage } from '../detail-sepeda/detail-sepeda';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  detailSepeda() {
    this.app.getRootNav().push(DetailSepedaPage);
  }

}
