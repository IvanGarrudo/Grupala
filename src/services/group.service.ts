import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Group } from "../models/grupo.model";

@Injectable()
export class GroupService{

    private groups: Group [] = [{"ngroup":"Gamers","type":"Videojuegos","foto":"../../assets/imgs/logo.png"}];
    constructor(){

    }

    getGroup(){
        return this.groups;
    }

    addGroup(value: Group){
        this.groups.push(value);
    }

    updateGroup(value: Group){

    }

    removeGroup(value: Group){

    }

    filterItems(searchTerm) {
        return this.groups.filter(groups => {return groups.ngroup.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 || 
            groups.type.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1;
        });
    }
}