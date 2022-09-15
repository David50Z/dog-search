import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDogosComponent } from './saved-dogos.component';

describe('SavedDogosComponent', () => {
  let component: SavedDogosComponent;
  let fixture: ComponentFixture<SavedDogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedDogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedDogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
