import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.page.html',
})
export class DrinksPage {

  constructor(private navCtrl: NavController) {}

  items=[
    {
     id:1,
     name: 'นมเมจิรสช็อคกาแลต',
     price: 12,
     imageURL: 'assets/img/drik/01.png'
    },
    {
     id:2,
     name: 'นมจืดเมจิ',
     price: 12,
     imageURL: 'assets/img/drik/02.png'
    },
    {
     id:3,
     name: 'น้ำโออิชิ',
     price: 10,
     imageURL: 'assets/img/drik/03.png'
    },
    {
     id:4,
     name: 'น้ำเป๊ปซี่',
     price: 10,
     imageURL: 'assets/img/drik/04.png'
    },

   ];

  goBack() {
    this.navCtrl.back();  // กลับไปยังหน้าก่อนหน้า
  }

  goNdwdext() {
    this.navCtrl.navigateForward('/food');  // ไปยังหน้าต่อไป
  }


}
