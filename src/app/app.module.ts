import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import {FusionChartsModule} from 'angular2-fusioncharts';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOCBPqQyVaaVrSPwjadJYCuG3Dt-nhQaM'
    }),
    AppRoutingModule,
	ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
