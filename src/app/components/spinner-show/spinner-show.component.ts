import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-spinner-show',
  templateUrl: './spinner-show.component.html',
  styleUrls: ['./spinner-show.component.css']
})
export class SpinnerShowComponent implements OnInit {

  @Input() loaderTitle: string = 'Loader...';
  @Input() loaderType: string = 'ball-fall';
  @Input() loaderSize: string = 'medium';
  @Input() loaderColor: string = '#fff';
  @Input() loaderBackgroundColor = 'rgba(0, 0, 0, 0.6)';

  constructor(
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

}
