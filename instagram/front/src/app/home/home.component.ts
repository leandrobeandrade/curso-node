import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Posts } from 'src/models/posts.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formPosts: FormGroup

  constructor() { }

  ngOnInit() {
    this.createForm(new Posts())
  }

  createForm(posts: Posts) {
    this.formPosts = new FormGroup({
      arqs: new FormControl(posts.file),
      desc: new FormControl(posts.descricao)
    })
  }

  onSubmit() {
    console.log(this.formPosts.value);

    this.formPosts.reset(new  Posts());
  }

  post() {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('posts').style.opacity = '0.1'
    document.getElementById('nav').style.opacity = '0.1'
  }

  closeModal() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('posts').style.opacity = '1'
    document.getElementById('nav').style.opacity = '1'
  }

}
