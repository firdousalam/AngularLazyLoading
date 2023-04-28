import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynewComponent } from './mynew.component';

describe('MynewComponent', () => {
  let component: MynewComponent;
  let fixture: ComponentFixture<MynewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
