import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContainerComponent } from './popup-container.component';

describe('PopupContainerComponent', () => {
  let component: PopupContainerComponent;
  let fixture: ComponentFixture<PopupContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
