import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Contact } from "../models/contact.model";

@Injectable()
export class ContactService{

    private contactsRef=this.db.list<Contact>('AgendaFirebase');
    constructor(private db:AngularFireDatabase){

    }

    addMember(value: Contact){

       // this.contacts.push(value);
       return this.contactsRef.push(value);

    }

}