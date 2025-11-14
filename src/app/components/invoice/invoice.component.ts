import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/model/invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

constructor(private service: InvoiceService){}  

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
