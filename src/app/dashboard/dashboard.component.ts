import { Component, OnInit } from '@angular/core';
import { FinanceService } from "../core/services/finance.service";
import { Variance } from "../core/models/variance.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  variances: Variance[] = [];
  ativo: string = 'PETR4.SA';
  LIMIT_TO_SHOW = 30;

  constructor(private financeService: FinanceService) {
  }

  ngOnInit(): void {
    this.getVariances();
  }

  getVariances(): void {
    this.financeService
      .getAll(this.ativo, this.LIMIT_TO_SHOW)
      .subscribe((items) => {
        this.variances = items;
      });
  }
}
