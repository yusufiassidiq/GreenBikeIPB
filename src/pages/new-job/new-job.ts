import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
 * Generated class for the NewJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-job',
  templateUrl: 'new-job.html',
})
export class NewJobPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewJobPage');
  }

}
