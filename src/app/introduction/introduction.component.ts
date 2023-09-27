import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const border = trigger('border', [
  state(
    'start',
    style({
      border: '4px solid black',
    })
  ),
  transition('start <=> *', [animate('0.5s ease-in-out')]),
]);
const grayscale = trigger('grayscale', [
  state(
    'start',
    style({
      filter: 'grayscale(0)',
    })
  ),
  transition('start <=> *', [animate('0.5s ease-in-out')]),
]);
const arrow = trigger('arrow', [
  state(
    'start',
    style({
      transform: 'translate(-80px, 80px)',
    })
  ),
  transition('start <=> *', [animate('0.5s ease-in-out')]),
]);

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  animations: [border, grayscale, arrow],
})
export class IntroductionComponent implements OnInit {
  @ViewChild('elementRef1', { static: true }) elementRef1: ElementRef | any;
  @ViewChild('elementRef2', { static: true }) elementRef2: ElementRef | any;

  showSomething1 = false;
  showSomething2 = false;
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
    this.observer.observe(this.elementRef2.nativeElement);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      this.showSomething1 =
        entry.target.getAttribute('id') == 'elementRef1'
          ? entry.isIntersecting
          : this.showSomething1;
      this.showSomething2 =
        entry.target.getAttribute('id') == 'elementRef2'
          ? entry.isIntersecting
          : this.showSomething2;
    });
  }
}
