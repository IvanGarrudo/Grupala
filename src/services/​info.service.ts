import { Injectable } from "@angular/core";
import { info } from '../models/contact.model';

@Injectable()
export class infoService{	
	private nombre:string;
	private info:string;
	constructor(){
		this.nombre="Rol Leganes";
		this.info="Grupo de rol de la universidad UC3M Leganes";
    }

	
	getInfo(){
		var a:info={nombre:this.nombre,inf:this.info};
		return a;
	}

	updateContact​(a:info​){  
		this.nombre=a.nombre;
		this.info=a.inf;
	}
}