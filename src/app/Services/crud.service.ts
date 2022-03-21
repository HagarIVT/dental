import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private _HttpClint:HttpClient) { }


  getInfoDoctor():Observable<any>
  {
    return this._HttpClint.get('https://6211ad7c01ccdac07428490d.mockapi.io/OMA/Doctors');
   }


   postContact(formdata:object):Observable<any>
   {
     return this._HttpClint.post('https://6211ad7c01ccdac07428490d.mockapi.io/OMA/UserMassage',formdata);
    }

}
