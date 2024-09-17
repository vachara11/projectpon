import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router ให้ถูกต้อง
import { Location } from '@angular/common'; // Import Location ให้ถูกต้อง

@Component({
  selector: 'app-mama',
  templateUrl: './mama.page.html',
  styleUrls: ['./mama.page.scss'],
})
export class MamaPage { // ต้องเป็นการ export ของ MamaPage ไม่ใช่ FoodPage
  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back(); // ใช้ Location เพื่อย้อนกลับหน้า
  }

  goNdwdext() {
    this.router.navigate(['/prouct']); // นำทางไปยังหน้าใหม่
  }
}
