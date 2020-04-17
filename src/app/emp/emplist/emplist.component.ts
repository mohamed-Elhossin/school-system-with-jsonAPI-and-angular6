import { RestApiService } from './../../shared/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
employees : any =[] ;
  constructor( private srv : RestApiService  ) { }

  ngOnInit() {
    this.loadEmployee();
  }



loadEmployee(){
 return this.srv.get().subscribe(data=>{
this.employees = data;
  })
}
deletemp(id){
  if(window.confirm('are you shor you want to delete this teachers !! ')){
this.srv.delete(id).subscribe(data => {
  this.loadEmployee();  
})
  }
}


}
