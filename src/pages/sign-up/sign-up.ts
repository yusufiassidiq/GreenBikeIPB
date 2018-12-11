import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { Http } from '@angular/http';
import { Data } from '../../provider/data';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  nama:any;
  nim:any;
  notelp:any;
  email:any;
  password:any;
  passwordTest:any;
  alamat:any;
  departemen:any;
  fakultas:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public http: Http,
    public alertCtrl: AlertController,
    private data : Data,
    public menuCtrl: MenuController) {
      this.menuCtrl.enable(false);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(){
    if(this.nama && this.email && this.password && (this.password == this.passwordTest) && this.alamat && this.departemen && this.fakultas && this.nim && this.notelp) {

      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        nama :this.nama,
        email: this.email, 
        password: this.password,
        nim: this.nim,
        alamat: this.alamat,
        notelp: this.notelp,
        departemen: this.departemen,
        fakultas: this.fakultas
      };
      // console.log(input);
      this.http.post(this.data.BASE_URL+"/create_mahasiswa.php",input).subscribe(data => {
      // console.log('cihuy');
      // console.log(data);
      let response = data.json();
      // console.log('test');
      // console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(HomePage);      
        loading.dismiss();
      }
      else if(response.status==409) {
        // loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Email Sudah Terdaftar',
            message : 'Silahkan Buat Akun Dengan Email Lainnya',      
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Gagal Membuat Akun',      
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
