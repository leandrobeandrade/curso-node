import { Component, OnInit } from '@angular/core';
import { Users } from 'src/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  public user: Users;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = new Users()
  }

  register() {
    this.router.navigateByUrl('/home')
  }

}
