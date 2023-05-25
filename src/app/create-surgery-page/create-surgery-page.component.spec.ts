import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurgeryPageComponent } from './create-surgery-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';


describe('CreateSurgeryPageComponent', () => {
  let component: CreateSurgeryPageComponent;
  let fixture: ComponentFixture<CreateSurgeryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSurgeryPageComponent ],
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule,MatChipsModule],
      
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
