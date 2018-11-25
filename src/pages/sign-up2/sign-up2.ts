import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the SignUp2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up2',
  templateUrl: 'sign-up2.html',
})
export class SignUp2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUp2Page');
  }

  signIn(){
    this.navCtrl.setRoot(HelloIonicPage);
  }

}
