import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAppointment } from '../Model/iappointment';
import { IAppointmentClient } from '../Model/iappointment-client';
import { IDoctor } from '../Model/idoctor';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  docId = localStorage.getItem('docId');

  constructor(private http: HttpClient) { }


  getInfoDoctor():Observable<any>
  {
    return this.http.get('https://6211ad7c01ccdac07428490d.mockapi.io/OMA/Doctors');
   }


   postContact(formdata:object):Observable<any>
   {
     return this.http.post('https://6211ad7c01ccdac07428490d.mockapi.io/OMA/UserMassage',formdata);
    }

    GetAllDoctors(): Observable<IDoctor[]> {

      return this.http.get<IDoctor[]>(`${environment.Api_core}/Doctor/GetAllDoctors`);

    }

    GetDoctorByID(id:number): Observable<IDoctor> {

      return this.http.get<IDoctor>(`${environment.Api_core}/Doctor/GetDoctorByID/`+id);

    }

    AddDoctor(postData: IAppointment): Observable<any> {

     console.log(postData);
     return this.http.post<any>(
       `${environment.Api_core}/Appointment/CreateAppointment`,
       postData)
   }

   GetAllAppointment(): Observable<IAppointmentClient[]> {

    return this.http.get<IAppointmentClient[]>(`${environment.Api_core}/Appointment/GetAllAppointment`);

  }

}
