import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-title>404: Página encontrada</mat-card-title>

      <mat-card-content>
        A página solicitada não foi encontrada!
      </mat-card-content>

      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">
          Ir para a home
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
