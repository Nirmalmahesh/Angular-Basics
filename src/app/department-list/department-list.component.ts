import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router : Router,private route:ActivatedRoute) { }

  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Reactjs"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Bootstrap"}
  ]
  selectedId;
  onSelect(department)
  {
    this.router.navigate(['/department',department.id])
  }

  isSelected(department)
  {
    console.log(department.id);
    return department.id === this.selectedId;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=>{
      let selectedId = parseInt(params.get('id'))
      this.selectedId = selectedId;
    })
  }

}
