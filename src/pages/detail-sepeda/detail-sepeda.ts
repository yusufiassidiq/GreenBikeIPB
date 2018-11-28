import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { PeraturanPage } from '../peraturan/peraturan';

/**
 * Generated class for the DetailSepedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-sepeda',
  templateUrl: 'detail-sepeda.html',
})
export class DetailSepedaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailSepedaPage');
  }

  pinjam() {
    this.app.getRootNav().push(PeraturanPage);
  }

}
