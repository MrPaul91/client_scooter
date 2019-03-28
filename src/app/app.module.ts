import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';
import {  RentingPage } from '../pages/renting/renting';
import {  PagoPage  } from '../pages/pago/pago';
import {  ViajePage  } from '../pages/viaje/viaje';


import { GoogleMapComponent } from '../components/google-map/google-map';

import { HttpClientModule } from '@angular/common/http';
//Servicios.

import { service} from './service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoogleMapComponent,
    SignUpPage,
    RentingPage,
    PagoPage,
    ViajePage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    RentingPage,
    PagoPage,
    ViajePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    service
  ]
})
export class AppModule {}
