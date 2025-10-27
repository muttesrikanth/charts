import { TestBed } from '@angular/core/testing';
import { CardService } from './card-service';
import { CardInterface } from '../interfaces/interfaces.card';

describe('CardService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default employee data', () => {
    const employee = service.getEmployee()();

    expect(employee).toBeTruthy();
    expect(employee.name).toBe('Srikanth Mutte');
    expect(employee.company).toBe('Grayradiant Dataservices Pvt Ltd');
    expect(employee.role).toBe('Frontend Developer');
    expect(employee.package).toBe(9);
    expect(employee.email).toBe('srikanthmutte.devgmail.com');
    expect(employee.dob).toBe('1999-06-15');
    expect(employee.workMode).toBe('Hybrid');
    expect(employee.address).toEqual({
      addressLine: 'Nagarabhavi',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560072'
    });
  });

  it('should return a Signal object from getEmployee()', () => {
    const signal = service.getEmployee();
    expect(typeof signal).toBe('function');
    const value = signal();
    expect(value.name).toBe('Srikanth Mutte');
  });
});
