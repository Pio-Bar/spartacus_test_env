import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCartDropdownComponent } from './mini-cart-dropdown.component';

describe('MiniCartDropdownComponent', () => {
  let component: MiniCartDropdownComponent;
  let fixture: ComponentFixture<MiniCartDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCartDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCartDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
