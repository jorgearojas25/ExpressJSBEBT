import thingModel from "./thing.model";
import Thing from "./thing.interface";

class ThingService {
    private thing = thingModel;

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

export default ThingService;
