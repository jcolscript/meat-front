import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  public rated = false;

  constructor() { }

  ngOnInit() {
  }

}
