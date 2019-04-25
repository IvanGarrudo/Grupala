import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Login } from "../models/contact.model";

@Injectable()
export class ContactService{ 
    contacts$: Promise <Login[]>; 

    private contactsRef=this.db.list<Login>('AgendaFirebase');
    
    constructor(private db:AngularFireDatabase){

    }

    addMember(value: Login){

       // this.contacts.push(value);
       return this.contactsRef.push(value);

    }

    getContacts():Promise<Login[]>{
        return this.contactsRef.toPromise();
    }
}