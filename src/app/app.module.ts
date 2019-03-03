import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';

import { AgGridModule } from 'ag-grid-angular';
import { GridDataComponent } from './grid-data/grid-data.component';

import {
  IgxButtonModule,
  IgxGridModule,
  IgxSwitchModule,
  IgxIconModule,
  IgxBadgeModule
} from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainComponent,
    GridDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxBadgeModule,
    IgxSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
