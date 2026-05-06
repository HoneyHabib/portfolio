import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements AfterViewInit{
@HostListener('window:scroll', [])
onScroll() {
  const timeline = document.querySelector('.timeline') as HTMLElement;
  const progressContainer = document.querySelector('.timeline-progress') as HTMLElement;
  const dot = document.querySelector('.progress-dot') as HTMLElement;
  const line = document.querySelector('.progress-line') as HTMLElement;

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // progress from when timeline enters → leaves screen
  let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
  progress = Math.max(0, Math.min(1, progress));

  // 👇 THIS is the fix: use progress container height
  const totalHeight = progressContainer.offsetHeight;

  const move = totalHeight * progress;

  dot.style.top = `${move}px`;
  line.style.height = `${move}px`;
}
  //   experiences = [
  //   {
  //     year: 'April 2026 – present',
  //     title: 'Senior Program Analyst, WNS (Capgemini)',
  //     desc: `Promoted for outstanding performance, led development of scalable web
  //       solutions, and participated across cross-functional teams.`
  //   },
  //   {
  //     year: 'July 2022 = March 2026',
  //     title: 'Program Analyst, WNS (Capgemini)',
  //     desc:   `Built scalable, production-grade web applications for global logistics and shipping clients, driving measurable gains in operational efficiency.
  //       Led frontend architecture and delivery of complex internal GEN AI platforms, focusing on performance, maintainability, and long-term scalability.
  //       Re-architected data-intensive systems to remove scalability bottlenecks and enable multi-client usage while reducing platform costs.
  //       Designed reusable, configuration-driven UI components shared across applications, improving development velocity and consistency.
  //       Supported mission-critical production systems, resolving live issues and ensuring high availability and reliability.`
  //   },
  //   {
  //     year: 'June 2018 – June2022',
  //     title: 'B.Tech CSEe',
  //     desc: `Completed engineering degree and internships focused on
  //      software development, problem-solving, and core system design principles.`
  //   }
    
  // ];
  experiences = [
  {
    year: 'Apr 2026 – Present',
    title: 'Senior Program Analyst - WNS (Capgemini)',
    desc: [
      'Promoted for outstanding performance ▹',
      'Led development of scalable web applications ▹',
      'Collaborated across cross-functional teams ▹'
    ]
  },
  {
    year: 'Jul 2022 – Mar 2026',
    title: 'Program Analyst - WNS (Capgemini)',
    desc: [
      '▹ Built Production grade scalable web apps for global logistics & shipping clients',
      '▹ Led frontend architecture for GenAI platforms',
      '▹ Re-architected data intensive systems for multi-client scalability',
      '▹ Designed reusable UI components',
      '▹ Maintained high-availability production systems'
    ]
  },
  {
    year: 'Jun 2018 – Jun 2022',
    title: 'B.Tech CSE - Jamia Hamdard University',
    desc: [
      'Focused on software development and problem-solving ▹',
      'Learned core system design principles ▹'
    ]
  }
];

  @ViewChildren('timelineItem') items!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    this.items.forEach(el => observer.observe(el.nativeElement));
  }
}
