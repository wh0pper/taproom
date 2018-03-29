import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellKegComponent } from './sell-keg.component';

describe('SellKegComponent', () => {
  let component: SellKegComponent;
  let fixture: ComponentFixture<SellKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
