import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoctor } from 'src/app/Model/idoctor';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  docInfo:IDoctor={
    doctorID :0,
    doctorName :'',
    doctorEmail :'',
    doctorPhone :'',
    doctorDegree :'',
    doctorExperience :'',
    doctorDescription :'',
    department:''
  }
  constructor(private route: ActivatedRoute,
    private crudService:CRUDService,) { }
  id:number = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.getdocInfo()
  }

  getdocInfo(){
    this.crudService.GetDoctorByID(this.id).subscribe(
      (res) => {

        this.docInfo=res
        console.log(res)

      },
      (err) => {
        console.log(err)
       }
    );
  }

}
