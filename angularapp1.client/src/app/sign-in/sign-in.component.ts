import { Component } from '@angular/core';
import { ServicesService } from '../MyService/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private service: ServicesService, private _route: Router) { }

  ngOnit() { }

  users: any
  getData(enterUser: any) {
    this.service.getAllUsers().subscribe((data: any) => {
      this.users = data.find((p: any) => p.Email == enterUser.Email && p.password == enterUser.password);
      if (this.users) {
        alert("login successfully")
        this._route.navigate(["/home"])
      } else {
        alert("Invalide email or password ")

      }
    })
  }

}
