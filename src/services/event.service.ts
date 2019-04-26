import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Event } from "../models/event.model";

@Injectable()
export class EventService{

    private events: Event [] = [{"nevent":"Gamers","desc":"Bla bla bla bla bla bla bla bla bla bla ","icon":"../../assets/img/space.png"}];
    constructor(){

    }

    getGroup(){
        return this.events;
    }

    addGroup(value: Event){
        this.events.push(value);
    }

    updateGroup(value: Event){

    }

    removeGroup(value: Event){

    }

    filterItems(searchTerm) {
        return this.events.filter(events => {return events.nevent.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 || 
            events.desc.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1;
        });
    }
}