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
  public user: Users;
  public formLogin: FormGroup

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.user = new Users()
    this.createForm(new Users())
  }

  login() {
    this.user.nome = this.formLogin.value.nome
    this.user.senha = this.formLogin.value.senha

    this.loginService.login(this.user).subscribe((result) => {
      if(!result) return
      else {
        this.router.navigateByUrl('/home')
        console.log(result)
      }
    })
  }

  createForm(users: Users) {
    this.formLogin = new FormGroup({
      nome: new FormControl(users.nome),
      senha: new FormControl(users.senha)
    })
  }

}
