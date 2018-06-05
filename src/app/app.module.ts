import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { WeatherApp } from './app.component';
import { LocalStorageModule } from 'angular-2-local-storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// pages
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// providers
import { WeatherApiProvider} from '../providers/weather-api/weather-api';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import { Geolocation } from '@ionic-native/geolocation';

import * as _ from 'lodash';

const pages: any = [
  AboutPage,
  HomePage,
  TabsPage
];

const providers: any = [
  WeatherApiProvider,
  GeolocationProvider,
  Geolocation
];
const pipes: any = [];
const directives: any = [];

@NgModule({
  declarations: _.compact(_.flattenDeep([
    WeatherApp,
    pages,
    pipes,
    directives,
  ])),
  imports: [
    BrowserModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'weather-app',
      storageType: 'localStorage'
    }),
    IonicModule.forRoot(WeatherApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: _.compact(_.flattenDeep([
    WeatherApp,
    pages,
    pipes,
    directives
  ])),
  providers: [
    StatusBar,
    SplashScreen,
    _.compact(_.flattenDeep([
      providers
    ])),
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
