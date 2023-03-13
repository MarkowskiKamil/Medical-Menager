import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchCommissioningComponent } from './research-commissioning.component';

describe('ResearchCommissioningComponent', () => {
  let component: ResearchCommissioningComponent;
  let fixture: ComponentFixture<ResearchCommissioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchCommissioningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchCommissioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
