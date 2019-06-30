import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  {path : '',redirectTo:'/department',pathMatch:'full'},
  {path : 'department-list',component : DepartmentListComponent},
  {path : 'employee-list',component : EmployeeListComponent},
  {
    path : 'department/:id',
    component : DepartmentDetailsComponent,
    children :[
      {path : 'overview',component:DepartmentOverviewComponent},
      {path : 'contact',component:DepartmentContactComponent}
    ]
  },
  {path : 'employee-details',component:EmployeeDetailComponent},
  {path : "**",component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,DepartmentDetailsComponent];