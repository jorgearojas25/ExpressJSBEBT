import { Schema, model } from "mongoose";
import Thing from "./thing.interface";

const ThingSchema = new Schema({
    //* Find more examples at moongose documentation
    testName: { type: String, required: true, default: "" },
    active: { type: Boolean, default: true },
    numberProp: { type: Number, default: 0 },
    dateProp: { type: Date, default: Date.now },
    numberRangeProp: { type: Number, min: 0, max: 10 },
    arrayProp: { type: Array },
    someId: { type: Schema.Types.ObjectId },
});

export default model<Thing>("Thing", ThingSchema);
