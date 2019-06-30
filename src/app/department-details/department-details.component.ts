import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  dep_id ;

 

  constructor(private router : ActivatedRoute,private route : Router) { }
  goToDepartmentList()
  {

  }

  goNext()
  {
    let nextId = this.dep_id + 1;
    this.route.navigate(["/department",nextId])
  }
  showOverview()
  {
    this.route.navigate(['overview'],{relativeTo : this.router})
  }
  showContact()
  {
    this.route.navigate(['contact'],{relativeTo : this.router})
  }
  goPrevious()
  {
    let nextId = this.dep_id - 1;
    this.route.navigate(["/department",nextId])
  }
  goBack()
  {
    let SelectedId = this.dep_id ? this.dep_id : null;
    this.route.navigate(['/department-list',{id:SelectedId}])
  }
  ngOnInit() {

   // let id = parseInt(this.router.snapshot.paramMap.get('id'));
   // this.dep_id = id;
this.dep_id;
   this.router.paramMap.subscribe((params : ParamMap)=>{
      this.dep_id = parseInt(params.get('id'));
   })
  }

}
