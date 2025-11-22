import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Items } from 'src/app/models/items';


@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
  styles: [
  ]
})
export class RowItemComponent {
  @Input() item!: Items;

  @Output() removeEventt = new EventEmitter();

  onRemove(id: number):void{
    this.removeEventt.emit(id);
  }
}
