import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthenService } from '../../Services/user-authen.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  userLogg: boolean=true;
  constructor(private userAuth: UserAuthenService) {
    // this.userLogg = this.userAuth.isUserInStorage;
  }
  ngOnInit(): void {
    this.userAuth.getUserStatus().subscribe({
      next:(user)=>{
        // console.log(user);

        this.userLogg=user;
      },
      error:(err)=>{

        console.log(err);

      }
    })
  }
}
