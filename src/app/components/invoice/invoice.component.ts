import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/models/invoice';
import { ClientViewComponent } from '../client-view/client-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { TotalComponent } from '../total/total.component';
import { ListItemsComponent } from "../list-items/list-items.component";
import { FormItemsComponent } from '../form-items/form-items.component';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    TotalComponent, 
    ListItemsComponent,
    FormItemsComponent,],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;
  

constructor(private service: InvoiceService){}  

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  onRemove(id: number){
    this.invoice = this.service.remove(id);
  }

  addItem(item: Items){
    this.invoice = this.service.save(item);
  }
}
