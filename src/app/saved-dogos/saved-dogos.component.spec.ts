import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDogosComponent } from './saved-dogos.component';
import { UpdateSavedDogosService } from '../services/update-saved-dogos.service'

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

  it('should communicate with update-saved-dogos service', () => {
    const fixture = TestBed.createComponent(SavedDogosComponent);
    const component = fixture.componentInstance

    const service: UpdateSavedDogosService = TestBed.get(UpdateSavedDogosService)
    expect(component).toBeTruthy()
    service.saveDogo('url')
    expect(service.savedDogos.length).toBeGreaterThan(0)
  })
});
