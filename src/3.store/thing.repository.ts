import thingModel from "@/interfaces/Entities/Thing/thing.model";
import Thing from "@/interfaces/Entities/Thing/thing.interface";

class ThingRepository {
    private thing = thingModel;

    //? This should be repository layer
    /**
     * Create a new Thing
     */
    public async create(body: Thing): Promise<Thing> {
        try {
            const thing = await this.thing.create(body);

            return thing;
        } catch (e) {
            throw new Error("Unable to create thing");
        }
    }
}

export default ThingRepository;
