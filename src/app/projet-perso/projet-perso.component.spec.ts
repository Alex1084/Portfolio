import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPersoComponent } from './projet-perso.component';

describe('ProjetPersoComponent', () => {
  let component: ProjetPersoComponent;
  let fixture: ComponentFixture<ProjetPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetPersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
