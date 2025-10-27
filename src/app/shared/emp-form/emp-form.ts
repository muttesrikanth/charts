import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-emp-form',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './emp-form.html',
  styleUrl: './emp-form.scss',
})
export class EmpForm {
  public employeeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    package: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required]),
    address: new FormGroup({
      addressLine: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
    }),
    hikes: new FormArray([]),
    workMode: new FormControl('', [Validators.required]),
  });

  get hikesList() {
    return this.employeeForm.get('hikes') as FormArray;
  }

  addcontroles() {
    this.hikesList.push(
      new FormGroup({
        year: new FormControl('', [Validators.required]),
        percentage: new FormControl('', [Validators.required]),
      })
    );
  }

  remove(index: number) {
    this.hikesList.removeAt(index);
  }

  onSubmit() {
    this.employeeForm.markAllAsTouched();
    if (this.employeeForm.valid) {
      console.log('Form Submitted', this.employeeForm.value);
      alert('Form submitted successfully!');
      this.employeeForm.reset();
    } else {
      return;
    }
  }
}
