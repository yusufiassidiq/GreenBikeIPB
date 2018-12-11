import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';
import { Data } from '../provider/data';

import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage : any;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private data: Data
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Beranda', component: HomePage },
      { title: 'Profil', component: ProfilePage },
      
      // { title: 'List Item', component: ListPage },
      // { title: 'Sign In', component: SignInPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //Session
    this.data.isLogin().then((value)=>{
      if(value){
        this.rootPage = HomePage;
      } else {
         this.rootPage = WelcomePage;
      }    
    });
    //Session
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
