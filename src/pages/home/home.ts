import { Component } from '@angular/core';
import { NavController, NavParams, App, MenuController, Menu } from 'ionic-angular';
import { DetailSepedaPage } from '../detail-sepeda/detail-sepeda';
import { Data } from '../../provider/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App,
    public menuCtrl: MenuController
    ) {
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  detailSepeda() {
    this.app.getRootNav().push(DetailSepedaPage);
  }
}
