import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { HomePage } from '../home/home'
import { Http } from '@angular/http';
import { Data } from '../../provider/data';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  email: any;
  password: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
      this.menuCtrl.enable(false);
      // this.testApi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signIn(){
    // this.navCtrl.setRoot(HomePage);
    if(this.email && this.password){
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        email: this.email, 
        password: this.password
      };
      // console.log(input);
      this.http.post(this.data.BASE_URL+"/login.php",input).subscribe(data => {
      // let response = JSON.parse(data._body);
      let response = data.json();
      // console.log(JSON.parse(response._body)); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(HomePage);
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Gagal Masuk',      
            message : 'Silahkan Periksa Email atau Kata Sandi Anda',
            buttons: ['OK']
          });
          alert.present();
          
      }    
      });
      //apiPost    
    }
  
  }

  signUp(){
    this.navCtrl.push(SignUpPage);
  }

  

  // testApi(){
    
  //   this.http.get(this.data.BASE_URL+"/db_connect.php").subscribe(data => {
  //     console.log(data); 
  //   });
      
  // }

}
