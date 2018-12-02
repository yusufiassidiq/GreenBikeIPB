import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { HomePage } from '../home/home'
import { Http } from '@angular/http';
import { Data } from '../../provider/data';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  name:any;
  nim:any;
  notelepon:any;
  email:any;
  password:any;
  passwordTest:any;
  address:any;
  departemen:any;
  fakultas:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public http: Http,
    public alertCtrl: AlertController,
    private data : Data,) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  // done(){
  //   let loading = this.loadCtrl.create({
  //     content: 'memuat..'
  //   });

  //   loading.present();
    

  //   this.navCtrl.setRoot(HomePage);

  //   loading.dismiss();
  // }

  signUp(){
    if(this.name && this.email && this.password && (this.password == this.passwordTest) && this.address && this.departemen && this.fakultas && this.nim && this.notelepon) {

      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        nama :this.name,
        email: this.email, 
        password: this.password,
        nim: this.nim,
        alamat: this.address,
        notelp: this.notelepon,
        departemen: this.departemen,
        fakultas: this.fakultas
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/create_mahasiswa.php",input).subscribe(data => {
      let response = data.json();
      console.log('test');
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(HelloIonicPage);      
        loading.dismiss();
      }
      else if(response.status==409) {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Email Already Taken',      
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Failed Creating New Account',      
            buttons: ['OK']
          });
          alert.present();      
          loading.dismiss();
      }    
      });
      //apiPost  

    }
  }


}
