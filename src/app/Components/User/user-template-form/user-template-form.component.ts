import { Component } from '@angular/core';
import { UsersService } from '../../../Services/Users.service';
import { Iuser } from '../../../Models/iuser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-template-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-template-form.component.html',
  styleUrl: './user-template-form.component.scss',
})
export class UserTemplateFormComponent {
  constructor(private UserService: UsersService,private router:Router) {}

  user:Iuser={} as Iuser;
  addUser() {
    // let u: Iuser = {
    //   firstName: 'Sayed',
    //   lastName: 'Ali',
    //   email: 'sAli@gmail.com',
    // };
    // this.UserService.signUp(u).subscribe({
    //   next: (user) => {
    //     console.log(user);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });


    this.UserService.signUp(this.user).subscribe({
      next:(u)=>{
        console.log(u);
        this.router.navigate(['/Products'])
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
}
