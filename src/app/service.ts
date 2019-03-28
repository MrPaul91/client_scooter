import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuario } from './usuario';

/*
  Generated class for the GeneralServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class service {


  public usuarioConectado:usuario;

  public usuarios:usuario[] = [{ nombre: 'user1', email:'user1@gmail.com', password:'1234'},
                     { nombre: 'user2', email:'user2@gmail.com', password:'1234'}
                     ];


  public estacion:string = 'Poblado Crra 35';

  public scooterAAlquilar: number = 7;

  public destino: string;
  

  constructor(public http: HttpClient) {
    console.log('Hello GeneralServiceProvider Provider');
  }

  agregarUsuario(_nombre,_email,_password){
     
    let encontrado = false;
    for (let index = 0; index < this.usuarios.length; index++) {
        
        if(this.usuarios[index].email === _email ){
          
          encontrado = true;
          return false;
        } 
    }

    if (!encontrado){

      let usuario =  { nombre: _nombre, email: _email , password: _password};         
      this.usuarios.push(usuario);
      
      return true;
    }
  }

  verificarUsuario(email, password): boolean{
     
    console.log("entro en verificar");
    for (let index = 0; index < this.usuarios.length; index++) {
      
         if(this.usuarios[index].email === email && this.usuarios[index].password === password ){
           
           this.usuarioConectado = this.usuarios[index];

           return true;
         } 
    }
    return false;

  }



}