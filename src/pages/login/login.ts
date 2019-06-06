import { Page1Page } from './../page1/page1';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userName="";
  passWord="";
  myLink = "https://cnn.com";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  btnClick()
  {
    console.log("btnClick");

    if(this.userName=="")
    
    console.log("Please enter a username");
    
    if(this.passWord=="")
    console.log("Please enter a password");

if(this.userName=="admin" && this.passWord=="123456")

this.navCtrl.push(Page1Page);

  }

  onClick()
  {
    console.log("Take a photo");
  }

}
