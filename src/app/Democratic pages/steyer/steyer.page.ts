import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { D57Page } from '../../modal/d57/d57.page';
import { D58Page } from '../../modal/d58/d58.page';
import { D59Page } from '../../modal/d59/d59.page';
import { D60Page } from '../../modal/d60/d60.page';
import { D61Page } from '../../modal/d61/d61.page';
import { D62Page } from '../../modal/d62/d62.page';
import { D63Page } from '../../modal/d63/d63.page';
import { D64Page } from '../../modal/d64/d64.page';

@Component({
  selector: 'app-steyer',
  templateUrl: './steyer.page.html',
  styleUrls: ['./steyer.page.scss'],
})
export class SteyerPage implements OnInit {
  
  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal73() {
    const modal = await this.modalController.create({
      component: D57Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D57Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal74() {
    const modal = await this.modalController.create({
      component: D58Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D58Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal75() {
    const modal = await this.modalController.create({
      component: D59Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D59Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal76() {
    const modal = await this.modalController.create({
      component: D60Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D60Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal77() {
    const modal = await this.modalController.create({
      component: D61Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D61Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal78() {
    const modal = await this.modalController.create({
      component: D62Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D62Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal79() {
    const modal = await this.modalController.create({
      component: D63Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D63Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal80() {
    const modal = await this.modalController.create({
      component: D64Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D64Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }

}

