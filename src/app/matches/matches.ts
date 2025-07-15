import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-matches',
  imports: [CommonModule],
  templateUrl: './matches.html',
  styleUrls: ['./matches.scss']
})
export class Matches implements OnInit {
  selectedTab: string = '';

  ngOnInit() {
    // تعيين التاب الافتراضي بعد تحميل الصفحة
    setTimeout(() => {
      this.selectedTab = 'upcoming';
    }, 0);
  }

  finishedMatches = [
    {
      competition: '  دوري روشن السعودي',
      competitionLogo: 'assets/images-removebg-preview.png',
      date: '7/27',
      time: '10:00 PM',
      homeTeam: 'الاتحاد',
      homeLogo: 'assets/itti_image-removebg-preview.png',
      awayTeam: 'الاهلي ',
      awayLogo: 'assets/alahliImage.jpg',
      score: '3 - 1',
      status: 'منتهية',
    },
    {
      competition: 'دوري روشن السعودي' ,
      competitionLogo: 'assets/images-removebg-preview.png',
      date: '7/30',
      time: '10:00 PM',
      homeTeam: 'الاتحاد',
      homeLogo: 'assets/itti_image-removebg-preview.png',
      awayTeam: 'الوحدة',
      awayLogo: 'assets/Al_Wehda_FC_Logo.png',
      score: '1 - 0',
      status: 'منتهية',
    }
  ];

  upcomingMatches = [
    {
      competition: 'دوري روشن السعودي',
      competitionLogo: 'assets/images-removebg-preview.png',
      date: '8/10',
      time: '9:00 PM',
      homeTeam: 'الاتحاد',
      homeLogo: 'assets/itti_image-removebg-preview.png',
      awayTeam: 'الهلال',
      awayLogo: 'assets/alhilalImage-removebg-preview.png',
      score: '',
      status: 'قادمة',
    },
    {
      competition: 'دوري روشن السعودي', 
      competitionLogo: 'assets/images-removebg-preview.png',
      date: '8/15',
      time: '8:30 PM',
      homeTeam: 'الاتحاد',
      homeLogo: 'assets/itti_image-removebg-preview.png',
      awayTeam: 'النصر',
      awayLogo: 'assets/alnasrimage.png',
      score: '',
      status: 'قادمة',
    }
  ];
}
