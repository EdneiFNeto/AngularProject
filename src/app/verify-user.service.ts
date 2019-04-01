import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerifyUserService {

  message:String;
  constructor(private http:HttpClient, private router:Router) { }

  authUser(user:any):void{
    
    this.http.get<Comment>("https://edneifnetodevmobile.000webhostapp.com/webservice/user.php").subscribe((data) =>{
     
      for(var i=0;i < data.length;i++){
        if(user === data[0].user){
          window.sessionStorage.setItem("user", user);
          this.router.navigate(["home"]);
          return;
        }else{
          this.message="*Erro ao autenticar usuário !";
        }
      } 
    });
  }

  removeSession():void{
    window.sessionStorage.removeItem("user");
    window.sessionStorage.clear();
  }

  selectUser():String{
    let user = window.sessionStorage.getItem("user");
    return user!=null ? user:null;
  }
}
