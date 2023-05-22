import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpStatusCode } from '@angular/common/http';
import { SurgeryClass } from '../surgery-class';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-surgery-page',
  templateUrl: './create-surgery-page.component.html',
  styleUrls: ['./create-surgery-page.component.css']
})
export class CreateSurgeryPageComponent implements OnInit {


   form: FormGroup | undefined;
    surgery:SurgeryClass=new SurgeryClass();

      data:any=[]
      toolsList:any=[]
      doctorsList:any=[]
      selectedTools:String[]=[]

     

  constructor(private api:ApiService,private formBuilder: FormBuilder){
    
    this.form = this.formBuilder.group(this.surgery); 

    this.api.viewSurgeryList().subscribe(
      response=>{
        console.log(response)
        this.data=response;
      }
    )

    this.api.fetchSurgeryTools().subscribe(
      response=>{
        console.log(response)
        this.toolsList=response
      }
    )

    
  
}


ngOnInit(): void {

  this.api.fetchDoctors().subscribe(
    response=>{
      console.log(response)
      this.doctorsList=response
    }
  )
    
}

 createSurgery(){
   let dataToSend:any={
      "type":this.surgery.type,
      "surgeryName":this.surgery.surgeryName,
      "patient":this.surgery.patient,
      "doctor":this.surgery.doctor,
      "surgeryDate":this.surgery.surgeryDate,
      "tools":this.surgery.tools,
      "priority":this.surgery.priority,
      "notes":this.surgery.notes

   }
    
    this.api.createSurgery(dataToSend).subscribe(
      (response:any)=>{
        if(HttpStatusCode.Accepted){
          alert("created successfully")
          window.location.reload()
        }
       
      },error=>{console.error(error)})

 }

 addTool() {
  const selectedTool = this.form.get('selectedTool').value;
  if (selectedTool) {
    this.surgery.tools.push(selectedTool);
  }
}



 
}
