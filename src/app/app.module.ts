import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { CoursesListServiceService } from './components/courses-list/courses-list.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CoursesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    CommonModule
  ],
  providers: [CoursesListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
