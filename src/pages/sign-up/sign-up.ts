import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { service } from '../../app/service';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {


  public email: string;
  public password: string;
  public nombre: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public servicio:service,
    public toastCtrl: ToastController
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  regresar(){
    this.navCtrl.pop();
  }

  signUp(){

    
    if(this.nombre && this.email && this.password ){

      let respuesta = this.servicio.agregarUsuario(this.nombre,this.email,this.password);

      if(respuesta){
         
        let toast = this.toastCtrl.create({
          message: 'Usuario agregado al sistema',
          duration: 3000
          //a messege is print if successfull
        });
        toast.present()
  
      }
      else{
  
        let toast = this.toastCtrl.create({
          message: 'Lo sentimos, no se pudo crear el usuario',
          duration: 3000
          //a messege is print if wrong
        });
        toast.present()
      }



    }
    else{

      let toast = this.toastCtrl.create({
        message: 'Lo sentimos, no se pudo crear el usuario',
        duration: 3000
        //a messege is print if wrong
      });
      toast.present()
    }

   

  }

}