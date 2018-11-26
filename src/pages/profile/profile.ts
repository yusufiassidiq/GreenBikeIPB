import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  signOut(){
    const root = this.app.getRootNav();
    root.setRoot(SignInPage);
    // this.navCtrl.setRoot(SignInPage);
  }

  

}
