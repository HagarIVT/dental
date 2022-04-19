import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAppointment } from 'src/app/Model/iappointment';
import { IDoctor } from 'src/app/Model/idoctor';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  Appointment:IAppointment={
    clientName:'',
    clientEmail:'',
    clientPhone:'',
    dateAppointment:new Date,
    doctorID:0
  }

  InfoDoctor:IDoctor[]=[];

  constructor(private crudServices:CRUDService) { }

  ngOnInit(): void {
    this.getAllDoctor()
  }

  onSubmit(form:NgForm){

    this.crudServices.AddDoctor(this.Appointment).subscribe((res) => {

      console.log('DONE')
    });
    console.log(this.Appointment)
  }

  getAllDoctor(){
    this.crudServices.GetAllDoctors().subscribe(
      (res) => {

        this.InfoDoctor=res
        console.log(res)

      },
      (err) => {
        console.log(err)
       }
    );
  }
}
