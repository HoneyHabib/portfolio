import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-social',
  imports: [],
  templateUrl: './floating-social.html',
  styleUrl: './floating-social.scss',
})
export class FloatingSocial {
     socials = [
    {
      icon: 'github',
      label: 'GitHub',
      link: 'https://github.com/honeyhabib'
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/honey-habib-7721641b3/'
    },
    {
      icon: 'code',
      label: 'LeetCode',
      link: 'https://leetcode.com/u/HoneyHabib/'
    },
    {
      icon: 'file-pdf',
      label: 'Download Resume',
      download: true
    }
  ];

  showMobileBar = true;
  lastScrollY = 0;

  @HostListener('window:scroll')
  onScroll() {
    const currentY = window.scrollY;

    if (currentY > this.lastScrollY && currentY > 80) {
      this.showMobileBar = false;
    } else {
      this.showMobileBar = true;
    }

    this.lastScrollY = currentY;
  }
}
