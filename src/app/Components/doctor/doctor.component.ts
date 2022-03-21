import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  InfoDoctor:any;
  imgpath:string="assets/Img/";
  tel="tel:+";
  mailto="mailto:";






face = "https://www.facebook.com/profile.php?id=100009531174236";



  constructor(_serve:CRUDService,_HttpClint:HttpClient)
  {
    _serve.getInfoDoctor().subscribe(data=>{
      this.InfoDoctor=data;});
   }

  ngOnInit(): void {
  }


}
