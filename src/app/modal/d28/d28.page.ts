import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-d28',
  templateUrl: './d28.page.html',
  styleUrls: ['./d28.page.scss'],
})
export class D28Page implements OnInit {

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
