import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogOfTheDayComponent } from './dog-of-the-day.component';

describe('DogOfTheDayComponent', () => {
  let component: DogOfTheDayComponent;
  let fixture: ComponentFixture<DogOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
