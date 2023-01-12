import { Component, Input } from '@angular/core';
import { Variance } from "../../../core/models/variance.model";

@Component({
  selector: 'app-table-variance',
  templateUrl: './table-variance.component.html',
  styleUrls: ['./table-variance.component.css']
})
export class TableVarianceComponent {

  @Input() dataSource: Variance[] = [];

  displayedColumns: string[] = [
    'day', 'date', 'price', 'variationDMinusOne', 'firstDateVariation'
  ];
}
