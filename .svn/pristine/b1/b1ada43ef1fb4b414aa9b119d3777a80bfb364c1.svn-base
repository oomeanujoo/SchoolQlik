import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutesComponent } from './dashboard/routes/routes.component';
import { BodyComponent } from './body/body.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ReportsComponent } from './reports/reports.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { TrackingComponent } from './dashboard/tracking/tracking.component';
import { TripsComponent } from './dashboard/trips/trips.component';
import { SchedulesComponent } from './dashboard/schedules/schedules.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { StudentComponent } from './student/student.component';
import { ParentsComponent } from './parents/parents.component';
import { DriverComponent } from './driver/driver.component';
import { ClassComponent } from './class/class.component';
import { Tracking2Component } from './dashboard/tracking copy/tracking.component';

const routes: Routes = [
  {path:'',redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
 

  {path:'',component:BodyComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'routes',component:RoutesComponent},
    {path:'reports',component:ReportsComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'utilties',component:UtilitiesComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'schedules',component:SchedulesComponent},
    {path:'trips',component:TripsComponent},
    {path:'tracking',component:TrackingComponent},
    {path:'tracking2',component:Tracking2Component},
    {path:'master',component:MasterComponent},
    {path:'student',component:StudentComponent},
    {path:'parent',component:ParentsComponent},
    {path:'driver',component:DriverComponent},
    {path:'class',component:ClassComponent},

  ]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
