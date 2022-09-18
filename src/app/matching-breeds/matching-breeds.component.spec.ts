import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingBreedsComponent } from './matching-breeds.component';

describe('MatchingBreedsComponent', () => {
  let component: MatchingBreedsComponent;
  let fixture: ComponentFixture<MatchingBreedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingBreedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
