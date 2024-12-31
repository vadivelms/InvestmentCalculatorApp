import { CommonModule } from '@angular/common';
import { Component, NgModule, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment!: string;
  annualInterest!: string;
  expectedReturn!: string;
  duration!: string;
  @Output() calculate = new EventEmitter();
  private investmentResults = inject(InvestmentService);
  onSubmit() {
    this.investmentResults.setInvestmentResults(
      parseFloat(this.initialInvestment),
      parseFloat(this.annualInterest),
      parseFloat(this.expectedReturn),
      parseFloat(this.duration)
    );

    this.calculate.emit();
  }

}
