import { Document } from "mongoose";

export default interface Thing extends Document {
    testName: string;
    active: boolean;
    numberProp: number;
    dateProp: any;
    numberRangeProp: number;
    arrayProp: any;
    someId: string;
}
