import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';

const slideInOut = trigger('slideInOut', [
  state(
    'start', 
    style ({
      right: '0',
      left: 'unset'
  })
  ),
  state(
    'end', 
    style ({
      left: '0',
      right: 'unset'
  })
  ),
  transition('start => *', [animate('1s ease-out')]),
  transition('* => start', [animate('1s ease-in')])
]);
const slideInOutreverse = trigger('slideInOutreverse', [
  state(
    'start', 
    style ({
      left: '0',
      right: 'unset'
  })
  ),
  state(
    'end', 
    style ({
      right: '0',
      left: 'unset'
  })
  ),
  transition('start => end', [animate('1s ease-out')]),
  transition('* => start', [animate('1s ease-in')])
])


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  animations: [slideInOut, slideInOutreverse]
})

export class SampleComponent implements OnInit {
  @ViewChild('elementRef1', { static: true }) elementRef1: ElementRef | any;

  isSlided = false;
  inView = false;

  private observer: IntersectionObserver | undefined;

  constructor(private renderer: Renderer2) {}
  
  ngOnInit() {
    
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      rootMargin: '0px',
      threshold: 1
    });
  
    this.observer.observe(this.elementRef1.nativeElement);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    if (entries[0].isIntersecting) {
      this.inView = true;
      this.isSlided = true;
    } else {
      this.inView = false;
      this.isSlided = false;
    }
  }
}