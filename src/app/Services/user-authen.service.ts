import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenService {
userLogg:BehaviorSubject<boolean>;
  constructor() {
    this.userLogg=new BehaviorSubject<boolean>(this.isUserInStorage);
   }


   login(userEmail:string, password:string){
    let token='251013';
    localStorage.setItem('userToken',token);
    // observer
    this.userLogg.next(true);
   }

   logout(){
    localStorage.removeItem('userToken');
    this.userLogg.next(false);
   }
   get isUserInStorage():boolean {
    return localStorage.getItem('userToken')?true:false;
   }
   getUserStatus(){
    return this.userLogg.asObservable();
   }
}
