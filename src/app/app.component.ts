import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SergeryApp';


  // constructor(private api:ApiService){
   
  //     api.viewSurgeryList().subscribe(
  //       response=>{
  //         console.log(response)
  //         this.data=response;
  //       }
  //     )
    
  // }
  //  data:any=[]

}
