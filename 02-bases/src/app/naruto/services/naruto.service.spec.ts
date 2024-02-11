import { TestBed } from '@angular/core/testing';

import { NarutoService } from './naruto.service';

describe('NarutoService', () => {
  let service: NarutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
