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
  @Input() item!: Items; //Recibir el ítem de la clase padre

  @Output() removeEventt = new EventEmitter(); // Emisor de eventos para eliminar un ítem a la clase padre

  onRemove(id: number):void{ //Método para mejar las eliminaciones 
    this.removeEventt.emit(id); // Emitir el ID del ítem a la clase padre
  }
}
