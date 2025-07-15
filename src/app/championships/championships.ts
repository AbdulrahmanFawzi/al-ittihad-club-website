import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-championships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './championships.html',
  styleUrls: ['./championships.scss']
})
export class Championships {
  championships = [
    { number: 50, title: 'دوري روشن السعودي 2025', image: 'assets/roshinImage.jpeg' },
    { number: 49, title: 'كأس خادم الحرمين الشريفين 2025', image: 'assets/kingcup.jpeg' },
    { number: 48, title: 'كأس السوبر السعودي 2023', image: 'assets/supercup.jpg' },
    { number: 47, title: 'دوري روشن السعودي 2023', image: 'assets/roshinImage.jpeg' },
    { number: 46, title: 'كأس خادم الحرمين الشريفين 2013', image: 'assets/kingcup.jpeg' },
    { number: 45, title: 'كأس خادم الحرمين الشريفين 2010', image: 'assets/kingcup.jpeg' },
  ];
}

