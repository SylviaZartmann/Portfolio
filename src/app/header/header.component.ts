import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderNaviService } from '../header-navi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  playAnimation = false;
  freshLoad = true;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private HeaderNaviService: HeaderNaviService
  ) {
    this.subscription = this.HeaderNaviService.click$.subscribe(() => {
      this.playAnimation = !this.playAnimation;
    });
  }
  toggleAnimation() {
    this.freshLoad = false;
    this.playAnimation = !this.playAnimation;
    if (!this.playAnimation) this.router.navigate(['/']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
