import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-items',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-items.component.html',
  styleUrls: ['./form-items.component.css']
})
export class FormItemsComponent {

  idCounter: number = 4;
  @Output() newItemEvent = new EventEmitter();

  item: any = {
    product: '',
    price: '',
    quiantity: ''
  };

  onItem(): void {
    this.newItemEvent.emit({ ...this.item, id: this.idCounter});
    this.idCounter++;

    this.item = {
      product: '',
      price: '',
      quiantity: ''
    };
  }
}
