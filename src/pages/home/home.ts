import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {Validators,FormGroup,FormBuilder,FormControl} from '@angular/forms'
import {Welcome} from '../welcome/welcome';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any = {name:"",password:""};
  form: FormGroup;
  welcome:any = Welcome;
  constructor(public navCtrl: NavController,public fb:FormBuilder,public alertCtrl:AlertController ) {
    this.form = this.fb.group({
      name:["",Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-z]')])],
      pass:["",Validators.compose([Validators.required])]
    });
  }

  openWindow(){
   if(this.user.name=="joararellanode" && this.user.password=="13400382@ittepic") 
     this.navCtrl.push(this.welcome);
     else{
       let alert = this.alertCtrl.create({
    title: 'Incorrecto',
    subTitle: 'Usuario y/o contraseña incorrecto',
    buttons: ['Dismiss']
  });
  alert.present();
     }
  }

}
