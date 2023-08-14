import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CreateSurgeryPageComponent } from './create-surgery-page/create-surgery-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path:"",component:CreateComponent
  },
  {
    path:"createSurgeryPage",component:CreateSurgeryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatFormFieldModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
