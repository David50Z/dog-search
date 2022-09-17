import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DogSearchComponent } from './dog-search.component';

describe('DogSearchComponent', () => {
  let component: DogSearchComponent;
  let fixture: ComponentFixture<DogSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [ DogSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch a url', function(done: DoneFn) {
    const fixture = TestBed.createComponent(DogSearchComponent);
    const component = fixture.componentInstance
    const de = fixture.debugElement
    fixture.detectChanges();
    component.submitForm.value.dogo = 'cattledog'
    component.dogoCall("cattledo")
    setTimeout(() => {
      expect(component.dogoImg.length).toBeGreaterThan(0) 
      console.log(component.dogoImg)
      done()
    }, 3000);
    
  })
});
