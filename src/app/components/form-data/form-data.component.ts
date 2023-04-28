import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  closeResult: string = '';
  statesList: any;
  userList: any;

  constructor(
    private modalService: NgbModal,
    private spinnerService: NgxSpinnerService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getAllStates();
    //this.getAllUsers();
  }

  private async getAllStates() {
    this.spinnerService.show();
    (
      await this.userService.GetAllStateData()
    ).subscribe((response) => {
      console.log("All States : ", response);
      this.statesList = response;
      this.spinnerService.hide();
    });
  }

  // private async getAllUsers() {
  //   this.spinnerService.show();
  //   (
  //     await this.userService.getAllUsers()
  //   ).subscribe((response) => {
  //     console.log("All Users : ", response);
  //     this.userList = response;
  //     this.spinnerService.hide();
  //   });
  // }

  public async saveUser() {
    this.spinnerService.show();
    (
      await this.userService.saveUser(this.form.value)
    ).subscribe((response) => {
      this.spinnerService.hide();
      console.log('User Saved Successfully', response);
    })
    this.form.reset();
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    stateId: new FormControl('', Validators.required),
  });


  get f() {
    return this.form.controls;
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.form.reset();
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
