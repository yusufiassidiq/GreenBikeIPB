import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  nim_mahasiswa:any;
  nama_mahasiswa:any;
  // userData:any;
  // users:any;
  id_mahasiswa:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public app: App, 
    public alertCtrl: AlertController,
    private data: Data,
    public http: Http) {     
  }

  ionViewWillEnter() {
    this.data.getData().then((data) => {
      console.log(data);
      // this.userData = data;
      // console.log(this.userData);
      this.nama_mahasiswa=data.nama
      this.nim_mahasiswa=data.nim
      console.log();
      // this.getPesanan();
   
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  signOut(){
    let confirm = this.alertCtrl.create({
      title: 'Keluar ?',
      message: 'Kamu yakin?',
      buttons: [
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
            this.data.logout();  //hapus storage cache local  
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
