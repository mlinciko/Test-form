import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialFormComponent } from './initial-form/initial-form.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

import { DecoderService } from './services/decoder.service';
import { InitialFormService } from './services/initial-form.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

@NgModule({
  declarations: [
    AppComponent,
    InitialFormComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9LdhddC45WUTAsiR3JqsXSbNEvYwLA-A'
    })
  ],
  providers: [
    DecoderService, 
    InitialFormService, 
    ProcessHTTPMsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
