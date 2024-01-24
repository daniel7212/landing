import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  slides: { image: string; text?: string }[] = [
    {
      image:
        'https://makercomputer.com/wp-content/uploads/2023/06/BANNER-WEB-1.jpg',
      text: 'foto1',
    },
    {
      image:
        'https://makercomputer.com/wp-content/uploads/2023/06/BANNER-WEB-2.jpg',
      text: 'foto2',
    },
    {
      image:
        'https://makercomputer.com/wp-content/uploads/2023/06/BANNER-WEB-3.jpg',
      text: 'foto3',
    },
  ];
  activeSlideIndex = 0;

  constructor() {
    /*
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }*/
  }

  addSlide(): void {
    this.slides.push({
      image: `assets/images/nature/${(this.slides.length % 8) + 1}.jpg`,
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
}
