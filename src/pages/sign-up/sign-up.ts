import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignUp2Page } from '../sign-up2/sign-up2';
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp2(){
    this.navCtrl.push(SignUp2Page);
  }


}
