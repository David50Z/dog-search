import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMultipleDogosComponent } from './search-multiple-dogos.component';

import { UpdateSavedDogosService } from '../services/update-saved-dogos.service';

describe('SearchMultipleDogosComponent', () => {
  let component: SearchMultipleDogosComponent;
  let fixture: ComponentFixture<SearchMultipleDogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMultipleDogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMultipleDogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
