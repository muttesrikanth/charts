import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { CardInterface } from '../../core/interfaces/interfaces.card';
import { CardService } from '../../core/services/card-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
 private employeeService = inject(CardService);

  employee:Signal<CardInterface> = this.employeeService.getEmployee()
}
