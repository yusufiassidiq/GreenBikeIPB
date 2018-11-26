import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  name : string;
  nim : string;


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  done(){
    this.navCtrl.setRoot(HelloIonicPage);
  }


}
