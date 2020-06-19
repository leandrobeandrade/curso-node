import { Component, OnInit } from '@angular/core';
import { Users } from 'src/models/user.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  public user: Users;
  public formRegister: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = new Users()
    this.createForm(new Users())
  }

  register() {
    this.user.nome = this.formRegister.value.nome
    this.user.email = this.formRegister.value.email
    this.user.senha = this.formRegister.value.senha
    
    // this.router.navigateByUrl('/home')
    console.log(this.user)
  }

  createForm(user: Users) {
    this.formRegister = new FormGroup({
      nome: new FormControl(user.nome),
      email: new FormControl(user.email),
      senha: new FormControl(user.senha),
      senha2: new FormControl(user.senha)
    })
  }

}
