import { Injectable } from '@angular/core';
import { User } from '../models/user';

const users: User[] = [
  {name: "gabriel", password: "123"},
  {name: "felipe", password: "dbz"},
  {name: "debora", password: "ilovenaruto"},

];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public static userLogin: User| null = null;

  public static authUser(): boolean{
    if(UserService.userLogin != null){
      return this.existsUser(UserService.userLogin);
    } 
    return false;
  }

  public static existsUser(u: User): boolean{
    let flag: boolean = false;
    for(let user of users){
      if(user.name == u.name && user.password == u.password){
        flag= true;
      }
    }
    return flag;
  }
}
