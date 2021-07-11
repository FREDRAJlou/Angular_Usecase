import { Flight } from "./flight.model";
import { Passenger } from "./passenger";

export class Booking {
    flight: Flight;
    passengers : Array<Passenger>;
    constructor(){
        this.flight={id:0,name:'',logo:'',date:new Date(),from:'',to:'',price:0};
        this.passengers=[];
    }
}
