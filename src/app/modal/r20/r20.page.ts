import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-r20',
  templateUrl: './r20.page.html',
  styleUrls: ['./r20.page.scss'],
})
export class R20Page implements OnInit {

  modalTitle:string;
  modelId:number;
 
  constructor(
    public modalController: ModalController,
    public navParams: NavParams
  ) { }
 
  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }
 
  async dismiss() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}