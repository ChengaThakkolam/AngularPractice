import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-example',
  templateUrl: './date-example.component.html',
  styleUrls: ['./date-example.component.css']
})
export class DateExampleComponent implements OnInit {

  dateOfBirth="";

  constructor() { }

  ngOnInit(): void {
  }

}
