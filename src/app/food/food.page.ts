import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; // เพิ่มการนำเข้า Location

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  constructor(private router: Router, private location: Location) { } // เพิ่ม Location ใน constructor

  ngOnInit() {
  }

  goNdwdext() {
    // เปลี่ยนเส้นทางไปยังหน้า /next-page
    this.router.navigate(['/snacks']);
  }

  goBack() {
    // ใช้ Location เพื่อไปยังหน้าก่อนหน้า
    this.location.back();
  }

}
