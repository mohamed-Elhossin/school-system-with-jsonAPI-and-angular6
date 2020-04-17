import { Sudent } from './../../shared-of-student/sudent';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared-of-student/resr-api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stud',
  templateUrl: './create-stud.component.html',
  styleUrls: ['./create-stud.component.css']
})
export class CreateStudComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(20)]),
    email: new FormControl('@yahoo.com', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    matrial: new FormControl('', [Validators.required]),
    level: new FormControl('', [Validators.required])

  })

  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get matrial() {
    return this.form.get('matrial');
  }
  get level() {
    return this.form.get('level');
  }



  stud: Sudent;

  constructor(private srv: RestApiService, private router: Router) {
  }

  ngOnInit() {
    this.stud = new Sudent();
    this.stud.name = "";
    this.stud.email = "";
    this.stud.phone = "";


  }


  addemployee(student) {
    if (!this.form.valid) {
      console.log("error");

    }
    else {
      this.srv.creat(this.stud).subscribe(data => {
        this.router.navigate(['/listStud']);
      })
    }

  }


}
