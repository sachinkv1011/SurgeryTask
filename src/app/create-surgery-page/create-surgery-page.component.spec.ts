import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurgeryPageComponent } from './create-surgery-page.component';

describe('CreateSurgeryPageComponent', () => {
  let component: CreateSurgeryPageComponent;
  let fixture: ComponentFixture<CreateSurgeryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSurgeryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSurgeryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
