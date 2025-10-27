import { Injectable, Signal, signal } from '@angular/core';
import { CardInterface } from '../interfaces/interfaces.card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private employeeSignal = signal<CardInterface>({
    name: "Srikanth Mutte",
    company: "Grayradiant Dataservices Pvt Ltd",
    role: "Ui Developer",
    package: 9,
    email: "srikanthmutte.dev@gmail.com",
    dob: "1997-07-20",
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
