import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService : EmployeeService) { }

  employees = [];
  ngOnInit() {
  
    this._employeeService.employees()
        .subscribe(data => this.employees = data,(error)=>{
         // console.log(error);
        } );
  }

}
