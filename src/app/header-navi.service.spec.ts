import { TestBed } from '@angular/core/testing';

import { HeaderNaviService } from './header-navi.service';

describe('HeaderNaviService', () => {
  let service: HeaderNaviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderNaviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
