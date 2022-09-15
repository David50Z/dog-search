import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDogoImageComponent } from './saved-dogo-image.component';

describe('SavedDogoImageComponent', () => {
  let component: SavedDogoImageComponent;
  let fixture: ComponentFixture<SavedDogoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedDogoImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedDogoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
