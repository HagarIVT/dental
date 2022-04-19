import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DoctorInfoComponent } from './Components/doctor-info/doctor-info.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { DoctorProfileComponent } from './Components/Doctors/doctor-profile/doctor-profile.component';
import { LoginComponent } from './Components/login/login.component';
import { MainServicesComponent } from './Components/main-services/main-services.component';
import { MainComponent } from './Components/main/main.component';
import { UserprofileComponent } from './Components/userprofile/userprofile.component';


const routes: Routes = [
  // { path: 'dash', component: DashboardComponent },
  { path: 'home', component: MainComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'doctorprofile', component: DoctorProfileComponent },
  { path: 'services', component: MainServicesComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'doctorInfo/:id', component: DoctorInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'userAccount', component: UserprofileComponent },
  //  { path: 'partners', component: OurpartnersComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, //Default Path

  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule { }
