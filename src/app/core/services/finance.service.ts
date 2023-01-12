import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MessageService } from "./message.service";
import { Finance } from "../models/finance.model";
import { Variance } from "../models/variance.model";

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  private financeUrl = `${environment.baseUrl}/finance`;
  constructor(private http: HttpClient,
              private messageService: MessageService) {}

  getAll(ativo: string, limit: number = 30): Observable<Variance[]> {
    return this.http
      .get<Finance>(`${this.financeUrl}/chart/${ativo}`)
      .pipe(
        map((finance: Finance) => this.formattedResult(finance, limit)),
        tap((items) => this.log(`Consultou o ativo: ${ativo}`))
      );
  }

  private formattedResult(finance: Finance, limit: number): Variance[] {
    try {
      const result = finance.chart.result[0];
      const timestamps = result.timestamp.slice(limit * -1);
      const quotes = result.indicators.quote[0].open.slice(limit * -1);
      const variances = quotes.map((price: any, index: number) => {
        const date = timestamps[index] * 1000;

        let variationDMinusOne = 0;
        let firstDateVariation = 0;

        if (index > 0 && price > 0) {
          variationDMinusOne = this.calculateVariance(price, quotes[index - 1]);
          firstDateVariation = this.calculateVariance(price, quotes[0]);
        }

        return {
          day: index,
          date,
          price: price || 0,
          variationDMinusOne,
          firstDateVariation,
        } as Variance
      });

      return variances;
    } catch (e) {
      return [];
    }
  }

  private getValuePercent(value: number, nextNumber: number): number {
    return value * 100 / nextNumber;
  }

  private calculateVariance(currentPrice: number, nextPrice: number) {
    const currentResult = this.getValuePercent(currentPrice, nextPrice);
    return currentResult > 100 ? currentResult - 100 : 100 - currentResult;
  }

  private log(message: string): void {
    this.messageService.add(`FinanceService: ${message}`);
  }
}