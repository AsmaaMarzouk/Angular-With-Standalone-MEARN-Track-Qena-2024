import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from '../../Services/user-authen.service';

@Component({
  selector: 'app-user-authen',
  standalone: true,
  imports: [],
  templateUrl: './user-authen.component.html',
  styleUrl: './user-authen.component.scss',
})
export class UserAuthenComponent implements OnInit {
  isUserLogin: boolean = true;
  constructor(private userAuth: UserAuthenService) {}
  ngOnInit(): void {
    this.isUserLogin = this.userAuth.isUserInStorage;
    // console.log(this.isUserLogin);
  }
  loginFunc() {
    this.userAuth.login('asd@gmail', '1111');
    this.isUserLogin = this.userAuth.isUserInStorage;//true
    // console.log(this.isUserLogin);
  }

  logoutFunc() {
    this.userAuth.logout();
    this.isUserLogin = this.userAuth.isUserInStorage;//false
    // console.log(this.isUserLogin);

  }
}
