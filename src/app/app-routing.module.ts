import { SettingComponent } from './backend/setting/setting.component';
import { ProfileComponent } from './backend/profile/profile.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { BackendLayoutComponent } from './_layout/backend-layout/backend-layout.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { AboutComponent } from './frontend/about/about.component';
import { FrontendLayoutComponent } from './_layout/frontend-layout/frontend-layout.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './frontend/service/service.component';

const brand:string =  "| GLS"
const routes: Routes = [
  //Frontend Rounting
  {
    path:'',component:FrontendLayoutComponent,
    children:[
      {path:'',component:HomeComponent,pathMatch:'full'},
      {path:'about',component:AboutComponent,data:{title:'About'+ brand}},
      {path:'service',component:ServiceComponent,data:{title:'Service'+ brand}},
      {path:'contact',component:ContactComponent,data:{title:'Contact'+ brand}}
    ]
  },
  //Backend Rounting
  {
    path:'backend',
    component:BackendLayoutComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'profile',component:ProfileComponent},
      {path:'setting',component:SettingComponent}
    ]
  },
  //not found URL rount

  {
      path:'**',redirectTo:'home'
  }

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
