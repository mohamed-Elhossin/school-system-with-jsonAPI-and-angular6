import { LoginComponent } from './student/login/login.component';
import { ListStudComponent } from './student/list-stud/list-stud.component';
import { EditStudComponent } from './student/edit-stud/edit-stud.component';
import { CreateStudComponent } from './student/create-stud/create-stud.component';
import { NavBarOfStudentComponent } from './student/nav-bar-of-student/nav-bar-of-student.component';
import { PagenonfoundComponent } from './pagenonfound/pagenonfound.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarOfEmpComponent } from './nav-bar-of-emp/nav-bar-of-emp.component';
import { EmpeditComponent } from './emp/empedit/empedit.component';
import { EmplistComponent } from './emp/emplist/emplist.component';
import { EmpcreateComponent } from './emp/empcreate/empcreate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path : '' , component : HomePageComponent},
  
   {path : 'home' , component : HomePageComponent},
 {path : 'navEmp' , component : NavBarOfEmpComponent},
{ path : 'create-emp' , component : EmpcreateComponent } ,
{path : 'list-emp' , component : EmplistComponent},
{path : 'edit-emp/:id' , component : EmpeditComponent},
{path : 'navStud' , component : NavBarOfStudentComponent },
{path : 'createStud' , component : CreateStudComponent },
{path : 'listStud' , component : ListStudComponent },
{path : 'editStud/:id' , component : EditStudComponent},
{path : 'login' , component : LoginComponent},
{path : '**' , component : PagenonfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
