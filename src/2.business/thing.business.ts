import { Request, NextFunction } from "express";
import ThingRepository from "@/store/thing.repository";
import HttpException from "@/utils/exceptions/http.exception";
import Thing from "@/interfaces/Entities/Thing/thing.interface";

class ThingBusiness {
    private ThingRepository = new ThingRepository();

    public create = async (
        req: Request,
        next: NextFunction
    ): Promise<Thing | void> => {
        try {
            const thing = await this.ThingRepository.create(req.body);

            return thing;
        } catch (e) {
            next(new HttpException(400, "Cannot create thing"));
        }
    };
}

export default ThingBusiness;
