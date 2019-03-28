import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { service } from '../../app/service';
import { ToastController } from 'ionic-angular';

import {  ViajePage  } from '../viaje/viaje'

/**
 * Generated class for the PagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html',
})
export class PagoPage {

 
  
  public email: string;
  public password: string;
  public nombre: string;
  public destino: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public servicio:service,
    public toastCtrl: ToastController
     ) {

      this.destino = this.servicio.destino;
      this.nombre = this.servicio.usuarioConectado.nombre;

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  regresar(){
    this.navCtrl.pop();
  }


  checkIn(){

    let toast = this.toastCtrl.create({
      message: 'Disfruta tu viaje',
      duration: 3000
      //a messege is print if successfull
    });
    toast.present();


    this.navCtrl.push(ViajePage);

    


  }

 

}
