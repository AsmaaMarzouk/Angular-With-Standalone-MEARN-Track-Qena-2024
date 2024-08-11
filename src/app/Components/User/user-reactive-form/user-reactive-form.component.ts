import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.scss',
})
export class UserReactiveFormComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.userForm=new FormGroup({
    //   firstName:new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   lastName:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]{3,}')]),
    //   email:new FormControl('',[Validators.required, Validators.email])
    // });

    // second way

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.array([]),
    });
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }
  get address(): FormArray {
    return this.userForm.get('address') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      city: '',
      street: '',
    });
  }

  addAddress() {
    this.address.push(this.newAddress())
  }

  removeAddress(i:number){
    this.address.removeAt(i)
  }
}
