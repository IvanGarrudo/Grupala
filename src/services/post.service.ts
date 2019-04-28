import { Post } from './../models/post.model';

export class PostService{

    public posts: Array<Post> =[new Post("Manuales","Hilo para hablar de manuales de D&D")];

    add(titulo:string, desc:string){
        this.posts.unshift(new Post(titulo,desc));
    }
}