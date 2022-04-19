import { Component, OnInit } from '@angular/core';
import { IAppointmentClient } from 'src/app/Model/iappointment-client';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  AppointmentClient:IAppointmentClient[]=[]

  constructor(private crudServices:CRUDService) { }

  ngOnInit(): void {
    this.getAppointment()
  }

  getAppointment(){
    this.crudServices.GetAllAppointment().subscribe((res) => {

      if(res.length){
        this.AppointmentClient=res
      }
      console.log('DONE')
    });
  }
}
