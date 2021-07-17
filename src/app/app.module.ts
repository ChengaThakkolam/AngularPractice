import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import { DateExampleComponent } from './date-example/date-example.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { PancardService } from './pancard.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPrintModule } from 'ngx-print';




@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ExampleDialogComponent,
    DateExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    NgxPrintModule
  ],
  providers: [PancardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
