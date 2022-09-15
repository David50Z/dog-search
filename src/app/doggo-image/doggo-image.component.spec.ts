import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoImageComponent } from './doggo-image.component';

describe('DoggoImageComponent', () => {
  let component: DoggoImageComponent;
  let fixture: ComponentFixture<DoggoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoggoImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoggoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
