import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Items } from 'src/app/models/items';
import { NgForOf } from '@angular/common';
import { RowItemComponent } from '../row-item/row-item.component';


@Component({
  selector: 'list-items',
  standalone: true,
  imports: [
    NgForOf, 
    RowItemComponent,],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {
  @Input() items: Items[] = [];
  @Output() removeEvent = new EventEmitter();
  onRemove(id: number): void {
    this.removeEvent.emit(id);
  }
}
