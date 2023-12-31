import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'legalnotice', component: LegalNoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 120]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }