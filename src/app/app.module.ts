import { AboutPage } from './../pages/about/about';
import { HttpClient } from '@angular/common/http';
import { NewsPage } from './../pages/news/news';
import { LoginPage } from './../pages/login/login';
import { GridPage } from './../pages/grid/grid';
import { Page1Page } from './../pages/page1/page1';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsProvider } from '../providers/news/news';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page1Page,
    GridPage,
    LoginPage,
    NewsPage,
    AboutPage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1Page,
    GridPage,
    LoginPage,
    NewsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule {}
