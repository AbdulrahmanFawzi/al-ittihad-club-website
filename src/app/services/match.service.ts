import { Injectable } from '@angular/core';

export interface Match {
  name: string;
  stadium: string;
  date: string;
  time: string;
  image: string;
  available: boolean;
}

@Injectable({ providedIn: 'root' })
export class MatchService {
  private matches: Match[] = [
    {
      name: 'الاتحاد × ضمك',
      stadium: 'ملعب الجوهرة',
      date: '10 أغسطس 2025',
      time: '9:00 مساءً',
      image: 'assets/ticketImage.jpg',
      available: true
    },
    {
      name: 'الاتحاد × الرياض',
      stadium: 'ملعب الامير عبدالله الفيصل',
      date: '17 أغسطس 2025',
      time: '8:00 مساءً',
      image: 'assets/ticketImage2.jpg',
      available: false
    },
    {
      name: 'الاتحاد × الهلال',
      stadium: 'ملعب كنقدوم ارينا ',
      date: '24 أغسطس 2025',
      time: '7:45 مساءً',
      image: 'assets/ticketImage3.jpg',
      available: false
    }
  ];

  getMatches(): Match[] {
    return this.matches;
  }
}
