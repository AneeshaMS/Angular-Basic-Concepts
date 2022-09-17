import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    if(username==='admin' && password ==='1234'){
      return 200
    }
    else{
      return 403
    }
  }
}
