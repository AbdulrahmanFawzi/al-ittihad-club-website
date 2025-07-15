import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.html',
  styleUrls: ['./store.scss']
})
export class Store {
  showFilters = false;
  selectedCategories: string[] = ['all'];

  // عشان نقدر نتعامل مع الدروب داون ونمنع انغلاقه عند الضغط داخله
  @ViewChild('filterDropdown') filterDropdownRef?: ElementRef;

  products = [
    { name: 'تيشرت رجالي', image: 'assets/Tshirtman.png', category: 'تيشرت', price: 120, oldPrice: 150, discount: 20 },
    { name: 'تيشرت نسائي', image: 'assets/T-shirtWomen.png', category: 'تيشرت', price: 130 },
    { name: 'شال الاتحاد', image: 'assets/ittiBlack.png', category: 'شال', price: 72, oldPrice: 80, discount: 10 },
    { name: 'علم الاتحاد', image: 'assets/ittiFlag.png', category: 'علم', price: 50 },
    { name: 'كاسة الاتحاد', image: 'assets/ittiCup.png', category: 'كوب', price: 51, oldPrice: 60, discount: 15 },
    { name: 'شنطة صغيرة', image: 'assets/ittiBack.png', category: 'شنطة', price: 90 }
  ];

  get filteredProducts() {
    if (this.selectedCategories.includes('all')) return this.products;
    return this.products.filter(p => this.selectedCategories.includes(p.category));
  }

  toggleCategory(category: string) {
  if (category === 'all') {
    this.selectedCategories = ['all'];
  } else {
    this.selectedCategories = [category]; // نسمح فقط بتحديد تصنيف واحد
  }
}

  isChecked(category: string): boolean {
    return this.selectedCategories.includes(category);
  }

  // هنا نتحقق إذا المستخدم ضغط خارج الدروب داون عشان نقفله
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.filterDropdownRef?.nativeElement.contains(event.target as Node);
    const clickedToggle = (event.target as HTMLElement).closest('.filter-toggle');

    if (!clickedInside && !clickedToggle) {
      this.showFilters = false;
    }
  }
}
