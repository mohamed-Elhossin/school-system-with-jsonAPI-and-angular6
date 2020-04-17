import { RestApiService } from './../../shared-of-student/resr-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userid ;
  constructor(private srv : RestApiService  ) { }

  ngOnInit() {
  }
   

    getadmin(){
      this.srv.get().subscribe(data=> {
data = this.userid;

      })
      
    }


}
