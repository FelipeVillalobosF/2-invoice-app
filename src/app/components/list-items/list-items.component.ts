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

  @Input() items: Items[] = []; // Recibir la lista de ítems de la clase padre
  @Output() removeEvent = new EventEmitter(); // Emisor de eventos para eliminar un ítem a la clase padre

  onRemove(id: number): void { //Método para manejar las eliminacionesd (se le da una variable de tipo number para manejar el evento recibido)
    this.removeEvent.emit(id); // Emitir el ID del ítem a la clase padre
  }
}
