import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-surgery-page',
  templateUrl: './create-surgery-page.component.html',
  styleUrls: ['./create-surgery-page.component.css']
})
export class CreateSurgeryPageComponent {
  constructor(private api:ApiService){
   
    this.api.viewSurgeryList().subscribe(
      response=>{
        console.log(response)
        this.data=response;
      }
    )
  
}
 data:any=[]
}
