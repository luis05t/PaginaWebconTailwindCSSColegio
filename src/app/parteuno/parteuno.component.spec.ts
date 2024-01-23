import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteunoComponent } from './parteuno.component';

describe('ParteunoComponent', () => {
  let component: ParteunoComponent;
  let fixture: ComponentFixture<ParteunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParteunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParteunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
