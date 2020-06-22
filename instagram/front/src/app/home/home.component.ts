import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Posts } from 'src/models/posts.models';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostsService]
})
export class HomeComponent implements OnInit {
  posts: Posts
  formPosts: FormGroup
  arquivo: File

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = new Posts()
    this.createForm(new Posts())
  }

  createForm(posts: Posts) {
    this.formPosts = new FormGroup({
      arquivo: new FormControl(posts.url_imagem),
      descricao: new FormControl(posts.descricao)
    })
  }

  onSubmit() {
    this.posts.url_imagem = this.formPosts.value.arquivo
    this.posts.descricao = this.formPosts.value.descricao;

    let formData = new FormData()
    formData.append('arqs', this.arquivo)
    formData.append('desc', this.posts.descricao)
    let data = {
      arquivo: formData.get('arqs'),
      descricao: formData.get('desc')
    }

    console.log(data)
    this.postsService.AddPost(data).subscribe(result => console.log(result))
  }

  insertFiles(files) {
    this.arquivo = files[0]
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
