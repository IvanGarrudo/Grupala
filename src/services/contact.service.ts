import { Injectable } from "@angular/core";
//import { AngularFireDatabase } from "angularfire2/database";
import { Login } from "../models/contact.model";
import { FirebaseApp } from "angularfire2";
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import firebase from "firebase";
import { LoginPage } from "../pages/login/login";

@Injectable()
export class ContactService{
    private susuario:string;

    private contactsRef=this.db.list<Login>('Logins');
    
    constructor(private db:AngularFireDatabase){

    }

    addMember(value: Login){
        firebase.database().ref('Logins/'+value.nusuario).set({
            mail: value.eusuario,
            contra: value.cusuario
        });
       // this.contacts.push(value);
       //return this.contactsRef.push(value);

    }
    getu(){
        return this.susuario
    }
    pushu(a:string){
        this.susuario=a;
    }
    getContacts(a: Login){
        var uno = false;
        
        var c = firebase.database().ref('/Logins/'+a.nusuario).once('value').then(function(snapshot){
            var username = (snapshot.val() && snapshot.val().contra )
            return username == a.cusuario;
            /*if(username == a.cusuario){
                uno = true;
                return uno;
            }
            if(username != a.cusuario){
                uno = false;
                return uno;
            }*/
        });
        
        /*var path = "/Logins/"+a.nusuario+"/contra"; 
        var c = firebase.database().ref(path).once('value');
        alert(c);*/

        
        //const l = db.ref('/Logins/');
        

        
        
    }
}