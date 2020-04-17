import { Sudent } from './../../shared-of-student/sudent';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared-of-student/resr-api.service';

@Component({
  selector: 'app-list-stud',
  templateUrl: './list-stud.component.html',
  styleUrls: ['./list-stud.component.css']
})
export class ListStudComponent implements OnInit {


  constructor(private srv: RestApiService) { }

  Sudent: any = [];


  ngOnInit() {
    this.loadEmployee();
  }

  loadEmployee() {
    return this.srv.get().subscribe(data => {
      this.Sudent = data;
    }) ;
  }
  deletemp(id) {
    if (window.confirm('are you sure you want to delete this student !! ')) {
      this.srv.delete(id).subscribe(data => {
        this.loadEmployee();
      })

    }
  }

}
