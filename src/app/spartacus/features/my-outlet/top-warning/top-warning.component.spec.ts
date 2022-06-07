import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWarningComponent } from './top-warning.component';

describe('TopWarningComponent', () => {
  let component: TopWarningComponent;
  let fixture: ComponentFixture<TopWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopWarningComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
