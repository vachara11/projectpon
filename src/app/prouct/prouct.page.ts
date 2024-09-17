import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prouct',
  templateUrl: './prouct.page.html',
  styleUrls: ['./prouct.page.scss'],
})
export class ProuctPage {

  constructor(private router: Router) { }



  // ฟังก์ชันสำหรับไปยังหน้า drinks
  navigateToDrinks() {
    this.router.navigate(['/drinks']);
  }

  // ฟังก์ชันสำหรับไปยังหน้า food
  navigateToFood() {
    this.router.navigate(['/food']);
  }

  // ฟังก์ชันสำหรับไปยังหน้า mama
  navigateToMama() {
    this.router.navigate(['/mama']);
  }
  navigateToNextPage12() {
    this.router.navigate(['/snacks']);
  }
  // ฟังก์ชันสำหรับไปยังหน้า next-page
  navigateToNextPage() {
    this.router.navigate(['/next-page']);
  }

  // ฟังก์ชันที่ขาดหายไป
  navigateToNextPage55() {
    this.router.navigate(['/mama']); // หรือหน้าอื่นที่ต้องการ
  }
}
