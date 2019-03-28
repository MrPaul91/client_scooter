import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { service } from '../../app/service';
import { ToastController } from 'ionic-angular';
import {  RentingPage } from '../renting/renting'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public servicio:service ) {
  }

  ingresar(){

    
    let respuesta = this.servicio.verificarUsuario(this.email, this.password);
    
    console.log(respuesta);
    if(respuesta){
       
      let toast = this.toastCtrl.create({
        message: 'Login Successful',
        duration: 3000
        //a messege is print if successfull
      });
      toast.present()

      this.navCtrl.push(RentingPage);

    }
    else{

      let toast = this.toastCtrl.create({
        message: 'Wrong Credentials',
        duration: 3000
        //a messege is print if wrong
      });
      toast.present()
    }

    
  }

  signUp(){

    this.navCtrl.push(SignUpPage);
  }

}