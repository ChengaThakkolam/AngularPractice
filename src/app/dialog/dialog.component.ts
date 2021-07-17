import { Component, OnInit } from '@angular/core';
import { PancardService } from '../pancard.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private panService:PancardService) { }

  pancards:any=[];
  ngOnInit(): void {
    this.getPan();
  }

  getPan(){
    this.panService.getPanCardData().subscribe(
      (data)=>{
        console.log(data);
        this.pancards=data;
      }
    );
  }

}
