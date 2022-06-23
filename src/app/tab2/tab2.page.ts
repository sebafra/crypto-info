import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: any = {};
  url: any = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
  loading: any;

  constructor(
    public loadingController: LoadingController
  ) {
    this.getItems();
  }

  getItems() {
    this.presentLoading();
    fetch(this.url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.items = data;
      })
      .catch(error => { console.error(error); });
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Connecting with coindesk...',
      duration: 1500
    });
    await this.loading.present();
  }


}
