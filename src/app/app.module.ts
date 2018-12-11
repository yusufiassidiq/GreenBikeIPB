import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { WelcomePage } from '../pages/welcome/welcome';
import { EditprofilePage } from '../pages/edit-profile/edit-profile';
import { HomePage } from '../pages/home/home';
import { DetailSepedaPage } from '../pages/detail-sepeda/detail-sepeda';
import { PeraturanPage } from '../pages/peraturan/peraturan';
import { TungguPage } from '../pages/tunggu/tunggu';
import { Data } from '../provider/data';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ProfilePage,
    SignInPage,
    SignUpPage,
    ListPage,
    WelcomePage,
    HomePage,
    DetailSepedaPage,
    PeraturanPage,
    TungguPage,
    EditprofilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ProfilePage,
    SignInPage,
    SignUpPage,
    ListPage,
    WelcomePage,
    HomePage,
    DetailSepedaPage,
    PeraturanPage,
    TungguPage,
    EditprofilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
