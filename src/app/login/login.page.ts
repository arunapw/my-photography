import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('username') username;
  @ViewChild('password') password;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  ngOnInit() {
  }

  onLogin() {
    if (this.username.value === 'admin' && this.password.value === 'admin'){
      this.navCtrl.navigateRoot('/tabs/tab2');
    }else{
      this.alertCtrl.create({
        message: ' Please use <br> username :admin  <br> password:admin',
        buttons: ['Dismiss']
      }).then(res => {
        res.present();

      });

    }
  }
}
