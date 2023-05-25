import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SurgeryClass } from './surgery-class';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

   createSurgery(surgery:SurgeryClass):Observable<Object>{
    return this.http.post("http://localhost:8080/surgery/create",surgery)
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
