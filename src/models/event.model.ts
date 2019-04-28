export interface Event {

    key?: string;//manejará el id cuando se utiliza firebase
    
    nevent: string;

    desc: string;
    user:string[];

    icon: string;
}