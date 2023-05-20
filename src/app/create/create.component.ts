import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

ngOnInit(): void {
    
}

  isDisplay=false;

  toggleDisplay(){
    this.isDisplay=!this.isDisplay;
  }

}
