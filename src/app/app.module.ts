import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReviewDataViewerComponent } from './review-data-viewer/review-data-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewDataViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
