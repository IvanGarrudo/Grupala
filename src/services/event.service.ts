import { ContactService } from './contact.service';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Event } from "../models/event.model";

@Injectable()
export class EventService{

    private events: Event [] = [{"nevent":"Resurgir el 7 de mayo","desc":"Eso, una partida de resurgir del dragon el dia 7 de mayo","icon":"../../assets/imgs/logo.png","user":[""]}];
    constructor(private ContactService:ContactService){

    }

    getGroup(){
        return this.events;
    }

    addGroup(value: Event){
        value.user=[];
        this.events.push(value);
    }

    updateGroup(value: Event){

    }
    sss(){
        this.events[1].user.push("-"+this.ContactService.getu())
    }
    removeGroup(value: Event){

    }

    filterItems(searchTerm) {
        return this.events.filter(events => {return events.nevent.toLowerCase().indexOf(searchTerm.toLowerCase())>-1 || 
            events.desc.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1;
        });
    }
}