import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-showmodal',
  templateUrl: './showmodal.page.html',
  styleUrls: ['./showmodal.page.scss'],
})


export class ShowmodalPage implements OnInit {

  constructor(private modalCtrl: ModalController) {}
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    });
    await modal.present();
  }

  ngOnInit() {
  }

}
