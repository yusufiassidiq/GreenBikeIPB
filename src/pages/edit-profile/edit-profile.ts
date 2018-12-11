import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditprofilePage {

  id_mahasiswa:any;
  alamat:any;
  notelp:any;
  email:any;
  password:any;
  nama:any;
  passwordTest:any;
  newPassword:any;
  newPasswordTest:any;
  passwordold:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {

      let temp = this.navParams.data;
      this.id_mahasiswa = temp.id_mahasiswa;
      this.nama = temp.nama;
      this.email = temp.email;
      this.alamat = temp.alamat;
      this.notelp = temp.notelp;
      this.password = temp.password;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  ionViewWillEnter() {
    this.data.getData().then((data) => {
      // console.log(data);
      // this.userData = data;
      // console.log(this.userData);
      this.id_mahasiswa=data.id_mahasiswa;
      this.passwordold=data.password;
      // console.log();
      // this.getPesanan();
   
    })
  }

  editProfile(){
    if(this.nama && this.email && this.alamat && this.notelp && (this.password==this.passwordold) && this.password && (this.newPassword==this.newPasswordTest)){
      
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        id_mahasiswa: this.id_mahasiswa,
        nama :this.nama,
        email: this.email, 
        alamat: this.alamat,
        notelp: this.notelp,
        password: this.newPassword,
        
      };
      // console.log(input);
      this.http.post(this.data.BASE_URL+"/update_mahasiswa.php?id_user="+this.id_mahasiswa,input).subscribe(data => {
      let response = data.json();
      // console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        if(!this.newPassword) this.navCtrl.setRoot(ProfilePage);  
        else this.navCtrl.setRoot(SignInPage);
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Failed Editing Account',      
            buttons: ['OK']
          });
          alert.present();      
          // loading.dismiss();
      }    
      });
      //apiPost  
      
    } 
  }

}
