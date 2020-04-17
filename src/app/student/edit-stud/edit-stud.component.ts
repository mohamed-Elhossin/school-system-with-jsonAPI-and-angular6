import { RestApiService } from './../../shared-of-student/resr-api.service';
import { Sudent } from './../../shared-of-student/sudent';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-stud',
  templateUrl: './edit-stud.component.html',
  styleUrls: ['./edit-stud.component.css']
})
export class EditStudComponent implements OnInit {

 stud : Sudent;
  constructor(private srv: RestApiService,
    private router: Router,
    private activeRote: ActivatedRoute
  ) { }
  studid = this.activeRote.snapshot.params['id']

  ngOnInit() {
    this.stud = new Sudent() ;
    this.getEmployeeById(this.studid);
  }

  getEmployeeById(id) {
    return this.srv.getbyID(id).subscribe(data => {
      this.stud = data;
    })
  }
  updatestudent(id){
    if(window.confirm('are you shor you want to ubdate this student !! ')){
      this.srv.updet(this.studid,this.stud).subscribe(data =>{
        this.router.navigate(['listStud']);
      })
    }
  }
}
