import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormDataComponent } from './components/form-data/form-data.component';
import { JobportalComponent } from './components/jobportal/jobportal.component';
import { HomeComponent } from './components/home/home.component';
import { TableModule } from 'ngx-easy-table';
import { SpinnerShowComponent } from './components/spinner-show/spinner-show.component';


interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormDataComponent,
    JobportalComponent,
    HomeComponent,
    SpinnerShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
