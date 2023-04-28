import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  userData: any = [];
  userPostResponse: any;
  closeResult: string = '';

  myModel: any;

  constructor(
    private userService: UsersService,
    private spinnerService: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
  ) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.registerForm.reset();
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

  async ngOnInit(): Promise<void> {
    await this.GetAllUsers();
  }

  private async GetAllUsers() {
    this.spinnerService.show();
    (
      await this.userService.getAllUsers()
    ).subscribe((response) => {
      console.log("User List Response : ", response);
      this.userData = response;
      this.spinnerService.hide();
    });
  }
}
