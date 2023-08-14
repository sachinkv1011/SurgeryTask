import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { CreateComponent } from './create.component';
import { CreateSurgeryPageComponent } from '../create-surgery-page/create-surgery-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponent,CreateSurgeryPageComponent ],
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule,MatChipsModule,NgMultiSelectDropDownModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle the display property from true to false', () => {
    component.isDisplay = true; // Set the initial value to true

    component.toggleDisplay();

    expect(component.isDisplay).toBe(false);
  });

  it('should toggle the display property from false to true', () => {
    component.isDisplay = false; // Set the initial value to false

    component.toggleDisplay();

    expect(component.isDisplay).toBe(true);
  });
});
