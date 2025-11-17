import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/models/invoice';
import { ClientViewComponent } from '../client-view/client-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { NgForOf} from '@angular/common';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [NgForOf, InvoiceViewComponent, ClientViewComponent, CompanyViewComponent,],
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
