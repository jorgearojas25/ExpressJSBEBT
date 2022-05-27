import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import HttpException from "@/utils/exceptions/http.exception";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/resources/thing/thing.validation";
import ThingService from "@/resources/thing/thing.service";

class ThingController implements Controller {
    public path = "/thing";
    public router = Router();
    private ThingService = new ThingService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        );
    }

    //? This should be Bussiness layer
    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const {
                testName,
                active,
                numberProp,
                dateProp,
                numberRange,
                arrayProp,
                someId,
            } = req.body;

            const thing = await this.ThingService.create(req.body);

            res.status(201).json({ thing });
        } catch (e) {
            next(new HttpException(400, "Cannot create thing"));
        }
    };
}

export default ThingController;
