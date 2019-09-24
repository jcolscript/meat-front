import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  public input: any;
  @Input() public label: string;
  @Input() public errorMessage: string;
  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error ('Esse componente precisa ser usada com uma diretiva ngModel');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
