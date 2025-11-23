import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoiceData';
import { Items } from '../models/items';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() {}

  getInvoice(): Invoice { //Métido que devuelve un objeto de tipo Invoice
    const total = this.calcularTotal(); //Calcula el total de la factura
    return { ...this.invoice, total }; //Devuelve una copia del objeto invoice con el total actualizado
  }

  calcularTotal() { //Método para calcular el total de la factura
    return this.invoice.items.reduce( //Usa el método reduce para sumar los totales de cada ítem
      (total, item) => total + (item.price * item.quiantity), // Calcula el total sumando el precio por la cantidad de cada ítem
      0)
;
  }

  remove(id: number): Invoice { //Método para eliminar un ítem
    this.invoice.items = this.invoice.items.filter((item) => item.id != id); //Filtra los ítems para eliminar el que tiene la id igual a la recibida 
    const total = this.calcularTotal(); //Recalcula el total después de la eliminación
    return { ...this.invoice, total }; ///Devuelve una copia del objeto invoice con el total actualizado
  }

  save(item: Items): Invoice { //Método para agregar un nuevo ítem
    this.invoice.items = [...this.invoice.items, item]; //Actializa la lista de ítems agregando el nuevo ítem recibido
    const total = this.calcularTotal(); //Recalcula el total después de agregar el nuevo ítem
    return { ...this.invoice, total }; //Devuelve una copia del objeto invoice con el total actualizado
  }
}
