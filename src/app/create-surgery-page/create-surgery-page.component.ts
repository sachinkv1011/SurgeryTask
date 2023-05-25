import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpStatusCode } from '@angular/common/http';
import { SurgeryClass } from '../surgery-class';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Route, Router, Routes } from '@angular/router';
import {MatChipInputEvent,MatChipEditedEvent,MatChipsModule} from '@angular/material/chips';
import { ViewChild, ElementRef} from '@angular/core';




@Component({
  selector: 'app-create-surgery-page',
  templateUrl: './create-surgery-page.component.html',
  styleUrls: ['./create-surgery-page.component.css']
})


export class CreateSurgeryPageComponent implements OnInit {
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: any ;

  type="";
  surgeryName="";
  patient="";
  tools:any;
  priority="";
  notes="";
  surgeryDate="";
  doctors:any;

  bioSection = new FormGroup({
    typeControll: new FormControl(this.type,Validators.required),
    typeControll2: new FormControl(this.surgeryName,Validators.required),
    typeControll3: new FormControl(this.patient,Validators.required),
    tools: new FormControl('',Validators.required),
    priority: new FormControl('',Validators.required),
    notes: new FormControl(''),
    typeControll4: new FormControl(this.surgeryDate,Validators.required),
    doctors: new FormControl('',Validators.required)
  });


  isDisplay2=false;

  toggleDisplay2(){
    this.isDisplay2=!this.isDisplay2;
  }
  toggleDisplay3(){
    this.isDisplay2=!this.isDisplay2;
  }


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




     

  constructor(private api:ApiService,private route:Router, private fb: FormBuilder){}

  ngOnInit() {

    this.fetchDoc();
    this.surgeryList();
    this.fetchTools();


  this.dropdownSettings = {
    idField: 'item_id',
    textField: 'item_text',
  };
}


  fetchTools(){
    this.api.fetchSurgeryTools().subscribe(
      response=>{
        console.log(response)
        this.toolsList=response
      })
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





 createSurgery(){
  if (this.bioSection.invalid) {

    this.bioSection.markAllAsTouched();
    alert("Opps ! Required data not submitted..Forms field empty")
    
  }

  else{
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
        if(response.status===HttpStatusCode.Accepted){
          this.surgeryList();
          this.fetchTools();
          this.fetchDoc();
          this.selectedDoctors=[]
          this.bioSection.reset();
          this.closeAddExpenseModal.nativeElement.click();
          alert("created successfully")
          
        }
       
      },error=>{console.error(error)})

 }
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

removeDoctor(doc: any): void { 
  const index = this.selectedDoctors.indexOf(doc);
  if (index >= 0) {
    this.selectedDoctors.splice(index, 1);
  }
}


formClose(){

  this.bioSection.reset();
  this.fetchDoc();
  this.selectedDoctors=[]
  this.closeAddExpenseModal.nativeElement.click();

}


 
}
