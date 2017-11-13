import { Component, OnInit } from '@angular/core';

// Services
import { PieDataService } from './_services/pie-data.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class='card'>
    <app-pie-chart [data]='data' [colours]='colours'></app-pie-chart>
  </div>
  `
})
export class AppComponent implements OnInit {
  data: Array<any>;
  colours = ['#57A1C6', '#4FC3F7', '#36D7B7'];

  constructor(
    private pieDataService: PieDataService
  ) {}

  ngOnInit() {
    this.data = this.pieDataService.generateData(30);
    setInterval(() => {
      this.data = this.pieDataService.generateData(30);
    }, 4000);
  }
}
