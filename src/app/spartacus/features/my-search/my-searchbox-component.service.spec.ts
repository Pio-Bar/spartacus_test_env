import { TestBed } from '@angular/core/testing';

import { MySearchboxComponentService } from './my-searchbox-component.service';

describe('MySearchboxComponentService', () => {
  let service: MySearchboxComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySearchboxComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
