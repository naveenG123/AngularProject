import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddairlineComponent } from './addairline.component';

describe('AddairlineComponent', () => {
  let component: AddairlineComponent;
  let fixture: ComponentFixture<AddairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddairlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
