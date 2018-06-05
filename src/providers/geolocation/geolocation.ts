import { Injectable } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class GeolocationProvider {

  constructor(
    private geolocation: Geolocation
  ) {

  }

  getCurrentPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.geolocation.getCurrentPosition().then((resp) => {
        return resolve(resp);
      }).catch((error) => {
        return reject(error);
      });
    });
  }
}