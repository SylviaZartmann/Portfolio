import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
const arrow = trigger('arrow', [
  state(
    'start',
    style({
      transform: 'translate(80px, 80px) scaleX(-1)'
    })
  ),
  transition('start <=> *', [animate('0.5s ease-in-out')]),
]);
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [arrow],
})
export class SkillsComponent  implements OnInit {
  @ViewChild('elementRef1', { static: true }) elementRef1: ElementRef | any;

  showSomething = false;
  animation: string | undefined;


  private observer: IntersectionObserver | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      } as IntersectionObserverInit
    );

    this.observer.observe(this.elementRef1.nativeElement);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      this.showSomething =
        entry.target.getAttribute('id') == 'elementRef1'
          ? entry.isIntersecting
          : this.showSomething;
  })
}
}
