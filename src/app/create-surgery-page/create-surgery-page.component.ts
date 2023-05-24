import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpStatusCode } from '@angular/common/http';
import { SurgeryClass } from '../surgery-class';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Route, Router, Routes } from '@angular/router';
import {MatChipInputEvent,MatChipEditedEvent,MatChipsModule} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ViewChild, ElementRef} from '@angular/core';




@Component({
  selector: 'app-create-surgery-page',
  templateUrl: './create-surgery-page.component.html',
  styleUrls: ['./create-surgery-page.component.css']
})


export class CreateSurgeryPageComponent implements OnInit {
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: any ;

  bioSection = new FormGroup({
    type: new FormControl(''),
    surgeryName: new FormControl(''),
    patient: new FormControl(''),
    tools: new FormControl(''),
    priority: new FormControl(''),
    notes: new FormControl(''),
    surgeryDate: new FormControl(''),
    doctors: new FormControl('')
  });

    type="";
    surgeryName="";
    patient="";
    tools:any;
    priority="";
    notes="";
    surgeryDate="";
    doctors:any;
  //  form: FormGroup | undefined;
    // surgery:SurgeryClass=new SurgeryClass();

      data:any=[]
      toolsList:any=[]
      doctorsList:any=[]
      selectedTools:String[]=[]
      dropDownForm:any= [];
      selectedDoctors: any[] = [];
      selected: any;
      option: boolean[]=[];



     

  constructor(private api:ApiService,private route:Router, private fb: FormBuilder){
    
     
    
    this.surgeryList();
    this.fetchDoc();

    this.fetchTools();


    
  
}
  fetchTools(){
    this.api.fetchSurgeryTools().subscribe(
      response=>{
        console.log(response)
        this.toolsList=response
      }


    )
  }

surgeryList(){
  this.api.viewSurgeryList().subscribe(
    response=>{
      console.log(response)
      this.data=response;
    }
  )
}

fetchDoc(){
  this.api.fetchDoctors().subscribe(
    response=>{
      console.log(response)
      this.doctorsList=response
    }
  )
}


dropdownSettings:IDropdownSettings={};

ngOnInit() {

this.fetchDoc();

  this.dropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
  };
}



 createSurgery(){
   let dataToSend:any={
      "type":this.type,
      "surgeryName":this.surgeryName,
      "patient":this.patient,
      "doctors":this.selectedDoctors,
      "surgeryDate":this.surgeryDate,
      "tools":this.tools,
      "priority":this.priority,
      "notes":this.notes

   }
  console.log(dataToSend)

console.log(this.bioSection.value)
    
    this.api.createSurgery(dataToSend).subscribe(
      (response:any)=>{
        console.log(response)
        if(HttpStatusCode.Accepted){
          alert("created successfully")
          this.surgeryList();
          this.fetchTools();
          this.fetchDoc();
          this.selectedDoctors=[]
          this.closeAddExpenseModal.nativeElement.click();



          // this.route.navigate(['/createSurgeryPage'])
          // 
          
        }
       
      },error=>{console.error(error)})

 }

 changeSelected(event:any){
  console.log(event);
  this.selected = event;
  this.doctorsList.splice(this.doctorsList.indexOf(event), 1);
  this.selectedDoctors.push(event);
 }
 changeSelected2(event:any){
  console.log(event);
  this.selected = event;
  this.selectedDoctors.splice(this.selectedDoctors.indexOf(event), 1);
  this.doctorsList.push(event);
  console.log(this.selectedDoctors)
 }

 addDoctor(event: MatChipInputEvent): void {
  const doctorName = event.value.trim();
  if (doctorName) {
    const doc = this.doctorsList.find( doctorName);
    if (doc && !this.selectedDoctors.includes(doc)) {
      this.selectedDoctors.push(doc);
    }
  }
  event.chipInput!.clear();
}

removeDoctor(doc: any): void { 
  const index = this.selectedDoctors.indexOf(doc);
  if (index >= 0) {
    this.selectedDoctors.splice(index, 1);
  }
}





 
}
