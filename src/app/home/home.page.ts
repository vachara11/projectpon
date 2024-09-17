import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router ถูกต้อง
import { Location } from '@angular/common'; // Import Location ถูกต้อง

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    {
      id: 1,
      name: "เครื่องดื่ม",
      img: "assets/img/pngtree-vector-water-bottle-icon-png-image_872139.jpg",
    },
    {
      id: 2,
      name: "ขนม",
      img: "assets/img/pngtree-vector-water-bottle-icon-png-image_872139.jpg",
    },
    {
      id: 3,
      name: "ของกินเล่น",
      img: "assets/img/pngtree-vector-water-bottle-icon-png-image_872139.jpg",
    },
    {
      id: 4,
      name: "อาหารกึ่งสำเร็จรูป",
      img: "assets/img/pngtree-vector-water-bottle-icon-png-image_872139.jpg",
    }
  ];

  constructor(private router: Router) {} // Inject Router ให้ถูกต้อง

  goNext() {
    this.router.navigate(['/prouct']); // แก้ชื่อเส้นทางให้ถูกต้อง
  }

}
