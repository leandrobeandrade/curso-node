import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Posts } from 'src/models/posts.models';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostsService]
})
export class HomeComponent implements OnInit {
  posts$
  noPosts = true

  posts: Posts
  formPosts: FormGroup
  arquivo: File

  images = 'http://localhost:3000/uploads/'
  post: Posts

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = new Posts()
    this.createForm(new Posts())

    this.postsService.listPosts().subscribe((posts: any) => {
      console.log(posts)
      if(posts.length != 0) {
        this.noPosts = false
        this.posts$ = posts
      }
    })
  }

  createForm(posts: Posts) {
    this.formPosts = new FormGroup({
      arquivo: new FormControl(posts.url_imagem),
      descricao: new FormControl(posts.descricao)
    })
  }

  onSubmit() {
    this.posts.url_imagem = this.formPosts.value.arquivo
    this.posts.descricao = this.formPosts.value.descricao

    let formData = new FormData()
    formData.append('arqs', this.arquivo)
    formData.append('desc', this.posts.descricao)

    this.postsService.AddPost(formData).subscribe(result => console.log(result))
    this.closeModal()
  }

  insertFiles(files) {
    this.arquivo = files[0]
  }

  createPost() {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('posts').style.opacity = '0.1'
    document.getElementById('nav').style.opacity = '0.1'
    this.createForm(new Posts())
  }

  editPost(post) {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('posts').style.opacity = '0.1'
    document.getElementById('nav').style.opacity = '0.1'
  }

  closeModal() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('posts').style.opacity = '1'
    document.getElementById('nav').style.opacity = '1'
    this.ngOnInit()
  }

  openModalEx(post) {
    this.post = post
    console.log('1: ', post)
    document.getElementById('delete').style.display = 'block'
    document.getElementById('posts').style.opacity = '0.1'
    document.getElementById('nav').style.opacity = '0.1'
  }

  deletePost() {
    this.postsService.deletePost(this.post).subscribe(post => console.log(post))
  }
 
  closeModalEx() {
    document.getElementById('delete').style.display = 'none'
    document.getElementById('posts').style.opacity = '1'
    document.getElementById('nav').style.opacity = '1'
  }

}
