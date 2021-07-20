import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {TabsPage} from '../tabs/tabs.page';
import {RouterModule, Routes} from '@angular/router';
import {AlertController, NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public navParams: NavParams) {
  }

  ngOnInit() {
  }

  //
  // login(){
  //   // eslint-disable-next-line eqeqeq
  //   if (this.username.value == 'admin' && this.password.value =='admin'){
  //     this.router.navigate(['/detail'])
  //   }else{
  //     let alert = this.alertCtrl.create({
  //       title: 'Please use  username :admin     password:admin',
  //       buttons: ['Dismiss']
  //     });
  //     alert.present();
  //   }
  // }

}
