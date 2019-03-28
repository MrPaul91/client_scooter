import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  PagoPage  } from '../pago/pago';

import { service } from '../../app/service';

/**
 * Generated class for the RentingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-renting',
  templateUrl: 'renting.html',
})
export class RentingPage {


  public destino: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: service) {
  }


  rentar()
  {
    
    this.servicio.destino = this.destino;

    this.navCtrl.push(PagoPage);


  }


 

}
