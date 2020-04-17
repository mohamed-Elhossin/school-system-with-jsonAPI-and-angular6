import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from './../../shared/employee';
import { RestApiService } from './../../shared/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent implements OnInit {


form = new FormGroup({
  username : new FormControl('', [Validators.required , Validators.minLength(20)]  ),
  email : new FormControl('', [Validators.required]),
  phone : new FormControl('', [Validators.required]),
  matrial : new FormControl('', [Validators.required]),
  level : new FormControl('', [Validators.required])

})

get username(){
  return this.form.get('username');
}
get email(){
  return this.form.get('email');
}
get phone(){
  return this.form.get('phone');
}
get matrial(){
  return this.form.get('matrial');
}
get level(){
  return this.form.get('level');
}

  emp : Employee;

  constructor(private srv : RestApiService , private router : Router) 
  {
   }

  ngOnInit() {
    this.emp = new Employee();
    this.emp.name="";
    this.emp.email="";
    this.emp.phone ;

    
  }
  

addemployee(employee){
  if (!this.form.valid) {
    console.log("there is an error");
    
  }else{
    this.srv.creat(this.emp).subscribe(data=>{
      this.router.navigate(['/list-emp']);
    })
  }

}

}
