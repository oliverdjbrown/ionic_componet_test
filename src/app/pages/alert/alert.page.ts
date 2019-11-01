import { Component, OnInit } from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController,
public nav : NavController){}
  async presentAlert() {
    var mensaje;
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Presionaste cancelar');
            mensaje = 'Presionaste Cancelar';
          }
        }, {
          text: 'Continuar',
          handler: () => {
            this.nav.navigateForward('/home');
          }
        }
      ]
    });

    await alert.present();
}



  ngOnInit() {
  }

}
