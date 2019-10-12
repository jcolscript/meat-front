import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Output() public rated = new EventEmitter<number>();
  public rates: number[] = [1, 2, 3, 4, 5];
  public rate: number = 0;
  public previousRate: number;

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTempRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate
    }
    this.rate = r
  }

  clearTempRate() {
    if(this.previousRate !== undefined) {
      this.rate = this.previousRate;
    }
    this.previousRate = undefined
  }

}
