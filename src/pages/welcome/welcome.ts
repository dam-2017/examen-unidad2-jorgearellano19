import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Register} from '../register/register';


/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
  register:any = Register;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }

  openRegister(){
    this.navCtrl.setRoot(this.register);
  }

}
