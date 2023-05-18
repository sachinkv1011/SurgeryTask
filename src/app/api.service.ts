import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

   createSurgery(data:any){
    return this.http.post("http://localhost:8080/surgery/create",data)
   }

   viewSurgeryList(){
    return this.http.get("http://localhost:8080/surgery/viewList")
   }

   fetchSurgeryTools(){
    return this.http.get("http://localhost:8080/surgery/surgeryTools")
   }

   fetchDoctors(){
    return this.http.get("http://localhost:8080/surgery/doctors")
   }
}
