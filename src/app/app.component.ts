import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular practice';

  constructor(private dialog:MatDialog){}
  openDialog(): void {
    this.dialog.open(DialogComponent,{
      width:'390px',height:'700px'
    });

  }
}
