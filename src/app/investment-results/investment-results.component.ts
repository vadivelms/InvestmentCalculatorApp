import { Component, Input, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({ required: true }) calculateFlag!: boolean;
  private investmentResults = inject(InvestmentService);
 
  get resultsAry() {
    return this.investmentResults.getInvestmentResults();
  }
}
