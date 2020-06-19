import { Posts } from './posts.models';

export class Users {
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public posts: Posts[];
}