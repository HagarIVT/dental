import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainServicesComponent } from './Components/main-services/main-services.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { DoctorInfoComponent } from './Components/doctor-info/doctor-info.component';
import { DoctorProfileComponent } from './Components/Doctors/doctor-profile/doctor-profile.component';
import { UserprofileComponent } from './Components/userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DoctorComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    MainServicesComponent,
    AppointmentComponent,
    DoctorInfoComponent,
    DoctorProfileComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
