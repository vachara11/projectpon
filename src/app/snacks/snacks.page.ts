import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router ให้ถูกต้อง
import { Location } from '@angular/common'; // Import Location ให้ถูกต้อง

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.page.html',
  styleUrls: ['./snacks.page.scss'],
})
export class SnacksPage { // เปลี่ยนชื่อจาก MamaPage เป็น SnacksPage
  constructor(private router: Router, private location: Location) {}

  // ฟังก์ชันสำหรับย้อนกลับ
  goBack() {
    this.location.back(); // ใช้ Location เพื่อย้อนกลับหน้า
  }

  // ฟังก์ชันสำหรับไปยังหน้าใหม่
  goNext() {
    this.router.navigate(['/mama']); // นำทางไปยังหน้าใหม่
  }
}
