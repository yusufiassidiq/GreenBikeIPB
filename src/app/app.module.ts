import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewJobPage } from '../pages/new-job/new-job';
import { ProfilePage } from '../pages/profile/profile';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { DetailSepedaPage } from '../pages/detail-sepeda/detail-sepeda';
import { PeraturanPage } from '../pages/peraturan/peraturan';
import { TungguPage } from '../pages/tunggu/tunggu';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    NewJobPage,
    ProfilePage,
    SignInPage,
    SignUpPage,
    ListPage,
    WelcomePage,
    HomePage,
    DetailSepedaPage,
    PeraturanPage,
    TungguPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    NewJobPage,
    ProfilePage,
    SignInPage,
    SignUpPage,
    ListPage,
    WelcomePage,
    HomePage,
    DetailSepedaPage,
    PeraturanPage,
    TungguPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
