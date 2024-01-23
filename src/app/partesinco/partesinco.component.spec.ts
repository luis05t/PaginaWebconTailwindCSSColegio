import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesincoComponent } from './partesinco.component';

describe('PartesincoComponent', () => {
  let component: PartesincoComponent;
  let fixture: ComponentFixture<PartesincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartesincoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartesincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
