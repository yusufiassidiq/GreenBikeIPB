import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  signOut(){
    this.navCtrl.setRoot(SignInPage);
  }

  

}
