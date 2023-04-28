import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './components/form-data/form-data.component';
import { UsersComponent } from './components/users/users.component';
import { JobportalComponent } from './components/jobportal/jobportal.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerShowComponent } from './components/spinner-show/spinner-show.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'register', component: FormDataComponent },
  { path: 'job-portal', component: JobportalComponent },
  { path: 'spinner', component: SpinnerShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
