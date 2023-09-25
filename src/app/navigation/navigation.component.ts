import { Component } from '@angular/core';
import { HeaderNaviService } from '../header-navi.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {  
  playAnimation = true;
  freshLoad = true;

  constructor(private HeaderNaviService: HeaderNaviService) {}

  triggerAction() {
    this.HeaderNaviService.triggerClick();
  }
}
