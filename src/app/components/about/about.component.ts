import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  tanseeqImages: any[];
  myInformation: { title: string, description: string }[] = [
    {
      title: 'Yazeed Idris',
      description: 'I am a software engineering student at King Fahd University of Petroleum and Minerals.\n          I am also in love with web development and everything that is related to it. For that reason I made Yazz.tech,\n          which\n          should show the visitor everything I make or learn regarding web development.'
    },
    {
      title: 'My Journey',
      description: 'My journey in the tech world started in 2017 when I was accepted into KFUPM, that year changed my whole life.\n          After\n          I finished the first year, I took my first programming course, it was all about Java. I didn\'t care much about\n          it,\n          but when I really understood the language I loved it. from that point forward, I invested a lot of my time in\n          learning more about programming, and with the help of the courses I took in software engineering and computer\n          science, I was able to become a better programmer and a software engineer. On my last year, I took the senior\n          project course and our project won the first prize at the university expo.'
    },
    {
      title: 'Future Plans',
      description: 'I am planning to gain more experience at software engineering and web development in particular. I am also\n    planning\n    to gain more experience in managing software projects. As for my website, I plan to use it as a platform to\n    share\n    my\n    knowledge and progress in my voyage in the tech world.'
    }
  ]

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
    console.log('inner width', window.innerWidth);
  }



}
