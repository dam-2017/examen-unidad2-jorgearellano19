import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators,FormGroup,FormBuilder,FormControl} from '@angular/forms'

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  form:FormGroup;
  nombre:String;
  pat:String;
  mat:String;
  birthDate:String;
  rfc:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fb:FormBuilder) {
    this.form = this.fb.group({
      nombre:["",Validators.required],
      paterno:["",Validators.required],
      materno:["",Validators.required],
      date:["",Validators.compose([Validators.required,Validators.pattern('/([0-9]{4})\/([0-9]{2})\/([0-9]{2})$/')])],
      rfc:[""]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  submit(){
    console.log(this.birthDate);
    if(this.mat.length<3){
      this.rfc = this.pat.charAt(0)+this.mat.charAt(0)+this.nombre.substr(0,2)+
      this.birthDate.substr(2,2)+this.birthDate.substr(5,2)+this.birthDate.substr(7,2); 
    }
    else if(this.pat=="" || this.mat==""){
      if(this.pat==""){
        this.rfc = this.mat.charAt(0)+this.primerVocal(this.mat)+this.nombre.substr(0,2)+
        this.birthDate.substr(2,2)+this.birthDate.substr(5,2)+this.birthDate.substr(8,2);
      }
      else{
        this.rfc = this.pat.charAt(0)+this.primerVocal(this.pat)+this.nombre.substr(0,2)+
        this.birthDate.substr(2,2)+this.birthDate.substr(5,2)+this.birthDate.substr(8,2);
      }
    }
    else{
      this.rfc = 'Z'+this.primerVocal(this.nombre)+this.mat.charAt(0)+this.nombre.charAt(0)+
        this.birthDate.substr(2,2)+this.birthDate.substr(5,2)+this.birthDate.substr(8,2);
    }

  }

  primerVocal(nombre:String):String{
    let letras:string[] = nombre.split('');
    let vocals = 'AEIOU';
    for(let i=0;i<letras.length;i++){
      console.log(letras[i]);
      if(vocals.includes(letras[i].toUpperCase())){
        console.log(letras[i]);
        return letras[i].toUpperCase();
      }
    }
  }

}
