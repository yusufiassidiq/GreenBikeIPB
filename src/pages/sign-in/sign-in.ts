import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signIn(){
    this.navCtrl.setRoot(HelloIonicPage);
  }

  signUp(){
    this.navCtrl.push(SignUpPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

}
