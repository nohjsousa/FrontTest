import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private ModalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  //async showModalOne(){
   // const modal = await this.ModalCtrl.create({
    //  component: ModalSabaMaisOnePage
    // });
    
    //modal.present ();
  }

  // async showModalTwo(){}

//}
