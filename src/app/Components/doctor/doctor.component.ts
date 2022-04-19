import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoctor } from 'src/app/Model/idoctor';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  InfoDoctor:IDoctor[]=[];

  constructor( 
    private crudService:CRUDService,
    private router: Router)
  {

   }

  ngOnInit(): void {
    this.getAllDoctor()
  }


  getAllDoctor(){
    this.crudService.GetAllDoctors().subscribe(
      (res) => {

        this.InfoDoctor=res
        console.log(res)

      },
      (err) => {
        console.log(err)
       }
    );
  }

  docInfo(docID:number){
this.router.navigateByUrl('/doctorInfo/'+docID)

  }
}
