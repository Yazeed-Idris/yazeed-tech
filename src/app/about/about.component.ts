import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  tanseeqImages: any[];

  constructor() {


    this.tanseeqImages = [
      {
        imgUrl: 'assets/Images/Tanseeq/1.jpg',
      },
      {
        imgUrl: 'assets/Images/Tanseeq/2.jpg',
      },
      {
        imgUrl: 'assets/Images/Tanseeq/3.jpg',
      },
      {
        imgUrl: 'assets/Images/Tanseeq/4.jpg',
      },
      {
        imgUrl: 'assets/Images/Tanseeq/5.jpg',
      },
      {
        imgUrl: 'assets/Images/Tanseeq/6.jpg',
      },
      {
        imgUrl: 'assets/Images/Tanseeq/7.jpg',
      },
    ]
  }



  ngOnInit(): void {
  }

}
