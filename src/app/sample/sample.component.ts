import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  Renderer2,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';

const slideRight = trigger('slideRight', [
  state(
    'start',
    style({
      right: '0',
    })
  ),
  transition('start <=> *', [animate('0.5s ease-in-out')]),
]);

const slideLeft = trigger('slideLeft', [
  state(
    'start',
    style({
      left: '0',
    })
  ),
  transition('start <=> *', [animate('0.5s ease-in-out')]),
]);

const grayscale = trigger('grayscale', [
  state(
    'start',
    style({
      filter: 'grayscale(0%)',
    })
  ),
  transition('start <=> *', [animate('0.5s ease-in-out')]),
]);

const border = trigger('border', [
  state(
    'start',
    style({
      border: '4px solid black',
    })
  ),
  transition('start <=> *', [animate('0.5s ease-in-out')]),
]);

const playbutton = trigger('playbutton', [
  state(
    'start',
    style({
      opacity: '1',
      filter: 'grayscale(0)'
    })
  ),
  transition('start <=> *', [animate('0.5s ease-out')]),
]);

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  animations: [slideRight, slideLeft, grayscale, border, playbutton],
})
export class SampleComponent implements OnInit {
  @ViewChild('elementRef1', { static: true }) elementRef1: ElementRef | any;
  @ViewChild('elementRef2', { static: true }) elementRef2: ElementRef | any;
  @ViewChild('elementRef3', { static: true }) elementRef3: ElementRef | any;

  showText1 = false;
  showText2 = false;
  showText3 = false;
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
    this.observer.observe(this.elementRef3.nativeElement);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    //console.log(entries);
    entries.forEach((entry) => {
      this.showText1 =
        entry.target.getAttribute('id') == 'elementRef1'
          ? entry.isIntersecting
          : this.showText1;
      this.showText2 =
        entry.target.getAttribute('id') == 'elementRef2'
          ? entry.isIntersecting
          : this.showText2;
      this.showText3 =
        entry.target.getAttribute('id') == 'elementRef3'
          ? entry.isIntersecting
          : this.showText3;
    });
  }
}
