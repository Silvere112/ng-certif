import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTeamComponent } from './select-team.component';

describe('SelectTeamComponent', () => {
  let component: SelectTeamComponent<string>;
  let fixture: ComponentFixture<SelectTeamComponent<string>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTeamComponent<string>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
