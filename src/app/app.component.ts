import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      fasIcon: 'chart-line',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard',
    },
    {
      fasIcon: 'file-lines',
      routerLink: '/logger',
      toolTipText: 'Logs',
    },
  ];
  title = 'Variação do Ativo';

}
