import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: any;
  url: any = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  info: any = {};
  loading: any;

  constructor(
    public loadingController: LoadingController
  ) {
    this.getItems();
  }

  getItems(){
    this.presentLoading();
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.info = data;
      })
      .catch(error => { console.error(error); });
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Connecting with coinbase...',
      duration: 1500
    });
    await this.loading.present();
  }
}
