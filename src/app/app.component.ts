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
  colours = ["#57A1C6", "#ff0059", "#72c245", "#46bfb0"];
  /**
   * {
        "state": "A",
        "color": "#57A1C6"
      },
      {
        "state": "O",
        "color": "#ff0059"
      },
      {
        "state": "P",
        "color": "#72c245"
      },
      {
        "state": "D",
        "color": "#46bfb0"
      }
   */


  constructor(
    private pieDataService: PieDataService
  ) { }

  ngOnInit() {
    this.data = this.pieDataService.getData();
    console.log(this.data);
    console.log(this.pieDataService.getData());
    setInterval(() => {
      //this.data = this.pieDataService.generateData(30);
    }, 4000);
  }
}
