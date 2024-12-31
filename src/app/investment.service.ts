import { Injectable } from "@angular/core";
import { calculateInvestmentResults } from "../investment-results";
import { InvestmentResult } from "./investment-results/investment.result.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    private results!: InvestmentResult[];
    setInvestmentResults(initialInvestment: number, annualInterest: number, expectedReturn: number, duration: number) {
        this.results = calculateInvestmentResults(initialInvestment, annualInterest, expectedReturn, duration);
        console.log(this.results);
    }

    getInvestmentResults() {
        return this.results;
    }

}