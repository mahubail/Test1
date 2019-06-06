import { NewsProvider } from './../../providers/news/news';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
 
})
export class NewsPage {
newsData:any;
item="123";
countryList=[
  {"name":"UAE","val":"ae"},
  {"name":"Argentina","val":"ar"},
  {"name":"Austria","val":"at"}
  
];
countryList2=[
  {"name":"Any","val":"any"},
  {"name":"Argentina","val":"ar"},
  {"name":"Australia","val":"au"},
  {"name":"Austria","val":"at"},
  {"name":"Belgium","val":"be"},
  {"name":"Brazil","val":"br"},
  {"name":"Bulgaria","val":"bg"},
  {"name":"Canada","val":"ca"},
  {"name":"China","val":"cn"},
  {"name":"Colombia","val":"co"},
  {"name":"Cuba","val":"cu"},
  {"name":"Czech Republic","val":"cz"},
  {"name":"Egypt","val":"eg"},
  {"name":"France","val":"fr"},
  {"name":"Germany","val":"de"},
  {"name":"Greece","val":"gr"},
  {"name":"Hong Kong","val":"hk"},
  {"name":"Hungary","val":"hu"},
  {"name":"India","val":"in"},
  {"name":"Indonesia","val":"id"},
  {"name":"Ireland","val":"ie"},
  {"name":"Italy","val":"it"},
  {"name":"Japan","val":"jp"},
  {"name":"Latvia","val":"lv"},
  {"name":"Lithuania","val":"lt"},
  {"name":"Malaysia","val":"my"},
  {"name":"Mexico","val":"mx"},
  {"name":"Morocco","val":"ma"},
  {"name":"Netherlands","val":"nl"},
  {"name":"New Zealand","val":"nz"},
  {"name":"Nigeria","val":"ng"},
  {"name":"Norway","val":"no"},
  {"name":"Philippines","val":"ph"},
  {"name":"Poland","val":"pl"},
  {"name":"Portugal","val":"pt"},
  {"name":"Romania","val":"ro"},
  {"name":"Russia","val":"ru"},
  {"name":"Saudi Arabia","val":"sa"},
  {"name":"Serbia","val":"rs"},
  {"name":"Singapore","val":"sg"},
  {"name":"Slovakia","val":"sk"},
  {"name":"Slovenia","val":"si"},
  {"name":"South Africa","val":"za"},
  {"name":"South Korea","val":"kr"},
  {"name":"Sweden","val":"se"},
  {"name":"Switzerland","val":"ch"},
  {"name":"Taiwan","val":"tw"},
  {"name":"Thailand","val":"th"},
  {"name":"Turkey","val":"tr"},
  {"name":"UAE","val":"ae"},
  {"name":"Ukraine","val":"ua"},
  {"name":"United Kingdom","val":"gb"},
  {"name":"United States","val":"us"},
  {"name":"Venuzuela","val":"ve"}
];
country="us";
categoryList=[
  {"name":"General","val":"general"},
  {"name":"Business","val":"business"},
  {"name":"Entertainment", "val":"entertainment"},
  {"name":"Health", "val":"health"},
  {"name":"Science", "val":"science"},
  {"name":"Sports", "val":"sports"},
  {"name":"Technology", "val":"technology"},
 ];
category="general";
  constructor(public navCtrl: NavController, public navParams: NavParams, private newsprovider:NewsProvider) {
  this.newsprovider.getNews("topHeadlines","country=" + this.country + "&category=" + this.category).subscribe(
    data=>{this.newsData=data;
  console.log(this.newsData);
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  loadNews()
  {
    this.newsprovider.getNews("topHeadlines","country="+this.country+"&category="+this.category).subscribe(
      data=>{this.newsData=data;
    console.log(this.newsData);
    //return this.newsData;
    })
  }

  adjustDateTime(dateTime:string)
  {
    return dateTime.substring(0,10) + " " + dateTime.substring(11,16) + " GMT";
  }

  onChange()
  {
    if(this.country == null)
    console.log("Please select a country");
this.loadNews();
  }
}
