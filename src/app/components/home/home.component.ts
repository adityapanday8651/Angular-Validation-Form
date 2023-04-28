import { Component, OnInit } from '@angular/core';
import { Config, Columns, DefaultConfig } from 'ngx-easy-table';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public configuration!: Config;
  public columns!: Columns[];
  data: any;
  constructor(
    private spinnerService: NgxSpinnerService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = false;
    this.columns = [
      { key: 'name', title: 'Name' },
      { key: 'email', title: 'Email' },
      { key: 'mobile', title: 'Mobile' },
      { key: 'stateId', title: 'State Id' },
      { key: 'createdBy', title: 'Created By' },
      { key: 'createdAt', title: 'Created At' },
    ];
  }


  private async getAllUsers() {
    this.spinnerService.show();
    (
      await this.userService.getAllUsers()
    ).subscribe((response) => {
      console.log("All Users : ", response);
      this.data = response;
      this.spinnerService.hide();
    });
  }

}
