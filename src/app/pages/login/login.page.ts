import { Component, OnInit } from '@angular/core';


import { ModalController, NavController } from '@ionic/angular';
//import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
//import { AuthService } from 'src/app/services/auth.service';
//import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  //integração com o FireBase
  loginForm = {
    email:'',
    password: ''
  }
  registerForm = {
    email:'',
    password: ''
  }
  //Fim de interação com o fireBase

  constructor(
    private modalController: ModalController,
    //private authService: AuthService,
    private navCtrl: NavController,
    //private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  dismissLogin() {
    this.modalController.dismiss();
  }

}

