import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user ;
  @ViewChild('password') password ;
  constructor(private fire : AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  openRegister() {
    this.navCtrl.push(RegisterPage);
  }
  login()
  {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value).then(data => {
      console.log(data)
      this.navCtrl.push(HomePage);
      
    }).catch(err => {
      console.log("err")
    }); 
  }

}
