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

  getInvoice(): Invoice {
    const total = this.calcularTotal();
    return { ...this.invoice, total };
  }

  calcularTotal() {
    return this.invoice.items.reduce(
      (total, item) => total + (item.price * item.quiantity),
      0)
;
  }

  remove(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter((item) => item.id != id);
    const total = this.calcularTotal();
    return { ...this.invoice, total };
  }

  save(item: Items): Invoice {
    this.invoice.items = [...this.invoice.items, item];
    const total = this.calcularTotal();
    return { ...this.invoice, total };
  }
}
