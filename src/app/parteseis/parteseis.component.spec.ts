import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteseisComponent } from './parteseis.component';

describe('ParteseisComponent', () => {
  let component: ParteseisComponent;
  let fixture: ComponentFixture<ParteseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParteseisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParteseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
