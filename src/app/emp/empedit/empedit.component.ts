import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from './../../shared/employee';
import { RestApiService } from './../../shared/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit {
  emp: Employee;
  constructor(private srv: RestApiService,
    private router: Router,
    private activeRote: ActivatedRoute
  ) { }
  empid = this.activeRote.snapshot.params['id']

  ngOnInit() {
    this.emp = new Employee() ;
    this.getEmployeeById(this.empid);
  }

  getEmployeeById(id) {
    return this.srv.getbyID(id).subscribe(data => {
      this.emp = data;
    })
  }
  updateEmployee(){
    if(window.confirm('are you sure you want to ubdate this teachers !! ')){
      this.srv.updet(this.empid,this.emp).subscribe(data =>{
        this.router.navigate(['list-emp']);
      })
    }
  }

}
