import { Client } from "./client";
import { Company } from "./company";
import { Items } from "./items";

export class Invoice{
    id!: number;
    name!: string;
    client!: Client;
    company!: Company;
    items!: Items[]; 
    total!: number;
    

}