import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Users } from 'src/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.listUsers().subscribe(x => console.log(x))
    this.createForm(new Users())
  }

  login() {
    this.router.navigateByUrl('/home')
  }


  createForm(users: Users) {
    this.formLogin = new FormGroup({
      nome: new FormControl(users.nome),
      senha: new FormControl(users.senha)
    })
  }

}
