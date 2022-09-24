import { Products } from "./Products";
export class Cart extends Products{
    quantity : number;
    constructor(){
        super();
        this.quantity = 1;
    }
}
