import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'app/models/menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addMenuItem() {
    this.add.emit(this.menuItem);
  }

}
