import { Injectable, Signal, signal } from '@angular/core';
import { CardInterface } from '../interfaces/interfaces.card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private employeeSignal = signal<CardInterface>({
    name: "Srikanth Mutte",
    company: "Grayradiant Dataservices Pvt Ltd",
    role: "Frontend Developer",
    package: 9,
    email: "srikanthmutte.devgmail.com",
    dob: "1999-06-15",
    workMode: "Hybrid",
    address: {
      addressLine: "Nagarabhavi",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560072"
    }
  });

  constructor() {}

  getEmployee(): Signal<CardInterface> {
    return this.employeeSignal;
  }
}
