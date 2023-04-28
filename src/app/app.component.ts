import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApplicationData With Modal';
  allUsersData: any = [];
  isEdit = false;
  submitted = false;

  addUserForms: any;

  //registerForm!: FormGroup;

  userObject = {
    userId: '',
    name: '',
    email: '',
    mobileNo: '',
    location: '',
    createdDate: '',
    createdBy: '',
    updatedDate: '',
    updatedBy: '',
  }


  constructor(
    private spinnerService: NgxSpinnerService,
    private formBuilder: FormBuilder
  ) { }

  // ngOnInit(): void {
  //   this.spinnerService.show();
  //   this.getLatestUser();
  // }

  // async addUser(formObj: any) {
  //   console.log(formObj);
  //   this.spinnerService.show();
  //   (
  //     await this.commonService.createUser(formObj)
  //   ).subscribe((response) => {
  //     this.spinnerService.hide();
  //     this.getLatestUser();
  //     console.log("User has been Added");
  //   });
  // }

  // async getLatestUser() {
  //   this.spinnerService.show();
  //   (
  //     await this.commonService.getAllUser()
  //   ).subscribe((response) => {
  //     this.spinnerService.hide();
  //     console.log("All User Data : ", response);
  //     this.allUsersData = response;
  //   });
  // }

  async editUser(user: any) {
    this.isEdit = true;
    this.userObject = user;

  }

  // async deleteUser(user: any) {
  //   this.spinnerService.show();
  //   (
  //     await this.commonService.deleteUser(user)
  //   ).subscribe((response) => {
  //     console.log("User Deleted Successfully");
  //     this.getLatestUser();
  //   })
  // }
  // async updateUser() {
  //   this.isEdit = !this.isEdit;
  //   this.spinnerService.show();
  //   (
  //     await this.commonService.updateUser(this.userObject)
  //   ).subscribe((respoinse) => {
  //     this.spinnerService.hide();
  //     console.log("User Updated Successfully", respoinse);
  //     this.getLatestUser();
  //   })
  // }

  onSubmit() {
    this.submitted = true;
    this.addUserForms.reset();

    if (this.addUserForms.invalid) {
      return
    }

    alert("Suceess");
    this.addUserForms.reset();
  }

}

