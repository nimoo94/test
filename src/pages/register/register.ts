import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user ;
  @ViewChild('password') password ;

  constructor(private fire : AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams, private db:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  registerUser(){
    console.log("ncqs");
    
    console.log("dd"+this.user.value +this.password.value);
    this.fire.auth.createUserWithEmailAndPassword(this.user.value ,this.password.value).
    then(data =>{

      //this.navCtrl.push(LoginPage);
      console.log('dataregister',data.user.uid)
      this.db.object("/users/"+data.user.uid).set({nom : "aymen",prenom :"boukhriss",email:"aymen@gmail.com"});
      
    })
    .catch(error =>{
        console.log('got an error',error)
    } );
    
  }

}
