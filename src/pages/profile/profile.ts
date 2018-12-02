import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  // signOut(){
  //   const root = this.app.getRootNav();
  //   root.setRoot(SignInPage);
  //   // this.navCtrl.setRoot(SignInPage);
  // }

  signOut(){
    let confirm = this.alertCtrl.create({
      title: 'Keluar ?',
      message: 'Kamu yakin?',
      buttons: [
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
            // this.data.logout();  //hapus storage cache local  
            this.navCtrl.setRoot(SignInPage);
          }
        },
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  

}
