import { MenuController } from 'ionic-angular';
import { GridPage } from './../grid/grid';
import { Component } from '@angular/core';
import { NavController, NavParams, DateTime } from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';


/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  
})
export class Page1Page {
pageTitle:string = "Hubail Web App";
myname="";
sausage:any;
public appMenu = [
  {title:'Test1', url:'', icon:'list'},
  {title:'Test2', url:'', icon:'add'},
  {title:'Test3', url:'', icon:'trash'},
]

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

  check(e)
  {
    if(e.checked)
    {
console.log("checked");
    }
    else
    console.log("unchecked");
  }

  clickE(){
  if(this.myname == "")
  console.log("Empty");
  else
  console.log(this.myname);
console.log(this.myname.length);




  
    let dateTime = new Date();
    
    console.log(dateTime)
  }

  goToGrid()
  {
    this.navCtrl.push(GridPage);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  getRandom()
  {
    return Math.random();
  }

  playSound()
  {
    console.log("play sound");
    //this.ringtones.playRingtone('assets/ringtones/sound_1.caf');
  }

  myFunction()
  {
    
    let myString = "in the name of allah";

  
  }

}
