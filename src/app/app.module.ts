import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

// Services
import { PieDataService } from './_services/pie-data.service';

// Pipes
import { SumPipe } from './_pipes/sum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    SumPipe
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [
    PieDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
