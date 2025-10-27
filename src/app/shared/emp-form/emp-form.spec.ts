import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpForm } from './emp-form';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmpForm', () => {
  let component: EmpForm;
  let fixture: ComponentFixture<EmpForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpForm, ReactiveFormsModule, CommonModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize employeeForm with all controls', () => {
    const form = component.employeeForm;

    expect(form.contains('name')).toBeTrue();
    expect(form.contains('company')).toBeTrue();
    expect(form.contains('role')).toBeTrue();
    expect(form.contains('package')).toBeTrue();
    expect(form.contains('email')).toBeTrue();
    expect(form.contains('dob')).toBeTrue();
    expect(form.contains('workMode')).toBeTrue();
    expect(form.contains('hikes')).toBeTrue();
    expect(form.get('address')).toBeTruthy();

    const addressGroup = form.get('address');
    expect(addressGroup?.get('addressLine')).toBeTruthy();
    expect(addressGroup?.get('city')).toBeTruthy();
    expect(addressGroup?.get('state')).toBeTruthy();
    expect(addressGroup?.get('pincode')).toBeTruthy();
  });

  it('should add a new hike control when addcontroles() is called', () => {
    expect(component.hikesList.length).toBe(0);
    component.addcontroles();
    expect(component.hikesList.length).toBe(1);
  });

  it('should remove a hike control when remove() is called', () => {
    component.addcontroles();
    expect(component.hikesList.length).toBe(1);
    component.remove(0);
    expect(component.hikesList.length).toBe(0);
  });

  it('should not submit form when invalid', () => {
    spyOn(window, 'alert');
    component.onSubmit();
    expect(window.alert).not.toHaveBeenCalled();
  });

  it('should submit form when valid and reset form', () => {
    spyOn(window, 'alert');
    spyOn(console, 'log');

    const form = component.employeeForm;
    form.patchValue({
      name: 'Srikanth Mutte',
      company: 'Grayradiant Dataservices Pvt Ltd',
      role: 'Frontend Developer',
      package: 9,
      email: 'srikanthmutte.dev@gmail.com',
      dob: '1999-06-15',
      workMode: 'Hybrid',
      address: {
        addressLine: 'Nagarabhavi',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560072'
      }
    });

    expect(form.valid).toBeTrue();
    component.onSubmit();

    expect(window.alert).toHaveBeenCalledWith('Form submitted successfully!');
    expect(console.log).toHaveBeenCalledWith('Form Submitted', jasmine.any(Object));
    expect(form.pristine).toBeTrue();
  });
});
