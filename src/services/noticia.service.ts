import { Noticia } from './../models/noticia.model';

/*
Esta clase se encarga de contener las noticias de un grupo, Las noticias son limitas
por una variable, para que no se llene toda la pagina de noticias nuevas, 
si no solo ciertos eventos que han sucedido en el grupo.
*/
export class NoticiaService{
    private noticias: Noticia[] = [ new Noticia("chatboxes","Bertin a comentado: \"Considero que no tienes razon 5º es mejor.\" en el hilo Manuales"), new Noticia("chatboxes", "PerezReverte a comentado: \"3.5 es lo unico de D&D que se deberia considerar rol\" en el hilo Manuales")];
    private tamaño:number=2;
    private limite:number=10;
    constructor(){

    }

    add( nueva:Noticia ){
        if(this.tamaño<this.limite){
            this.noticias.push(nueva);
            this.tamaño++;
        }else{
            this.noticias.splice(9);
            this.noticias.push(nueva);
        }
    }

    get(){
        return this.noticias;
    }

}