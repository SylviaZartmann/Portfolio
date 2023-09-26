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

 const slideInOut = 
trigger('slideInOut', [
  state('start', style({
    left: '0',
    right: 'unset',
    })
  ),
  state('end', style({
    right: '0',
    left: 'unset',
    })
  ),
  transition('end <=> start', [animate('1s ease-in-out')]),
  //transition('start => end', [animate('1s ease-in')]),
 ]);

const slideInOutreverse = 
trigger('slideInOutreverse', [
  state('start', style({
      left: '0',
      right: 'unset',
    })
  ),
  state('end', style({
      right: '0',
      left: 'unset',
    })
  ),
  transition('start => end', [animate('1s ease-out')]),
  transition('end => start', [animate('1s ease-in')]),
]);

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  animations: [slideInOut, slideInOutreverse],
})
export class SampleComponent implements OnInit {
  @ViewChild('elementRef1', { static: true }) elementRef1: ElementRef | any;
  // @ViewChild('elementRef2', { static: true }) elementRef2: ElementRef | any;
  // @ViewChild('elementRef3', { static: true }) elementRef3: ElementRef | any;

  showText1 = false;
  showText2 = false;
  showText3 = false;

  private observer: IntersectionObserver | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    );
    

    this.observer.observe(this.elementRef1.nativeElement);
    // this.observer.observe(this.elementRef2.nativeElement);
    // this.observer.observe(this.elementRef3.nativeElement);

   }



  private handleIntersection(entries: IntersectionObserverEntry[]) {
    console.log(entries);
    if (entries[0].isIntersecting) {
      this.showText1 = true;
      this.showText2 = false;
      this.showText3 = false;
    } else {
      this.showText1 = false;
      this.showText2 = false;
      this.showText3 = false;
    }
  }
}
