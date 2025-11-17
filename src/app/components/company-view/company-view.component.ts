import { Component, Input } from '@angular/core';
import { Company } from 'src/app/models/company';


@Component({
  selector: 'company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html',
  styleUrls: [
  ]
})
export class CompanyViewComponent {
  @Input() company: Company = new Company();
}

