import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { WeatherApiProvider } from '../providers/weather-api/weather-api';
import { LocalStorageService } from 'angular-2-local-storage';

import * as _ from 'lodash';

@Component({
  templateUrl: 'app.html'
})
export class WeatherApp {
  rootPage: any = TabsPage;

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private weatherProvider: WeatherApiProvider,
    private storage: LocalStorageService,
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      let cities = this.storage.get('cities');
      if (!cities || _.isEmpty(cities)) {
        this.weatherProvider.getCities().subscribe((resp: any) => {
          this.storage.set('cities', resp);
        });
      }
    });
  }

  getTimeClass() {
    // use custom currentTime to emulate the background image
    // let currentTime = 18;
    let currentTime = (new Date()).getHours();
    if (currentTime > 6 && currentTime <= 16) return 'day';
    if (currentTime > 16 && currentTime <= 19) return 'afternoon';
    if ((currentTime > 19 && currentTime <= 24) || (currentTime > 0 && currentTime <= 6)) return 'night';
  }
}
