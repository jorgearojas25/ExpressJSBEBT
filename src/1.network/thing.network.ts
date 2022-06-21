import { Router } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Thing/thing.validation";
import ThingBusiness from "@/business/thing.business";
import response from "@/utils/response";

class ThingNetwork implements Controller {
    public path = "/thing";
    public router = Router();
    private ThingBusiness = new ThingBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Create one Thing
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            (req, res, next) => {
                this.ThingBusiness.create(req, next)
                    .then((data) => {
                        response.success(res, [data], 201, "Created");
                    })
                    .catch((err) =>
                        response.error(res, 500, "Internal Server Error", err)
                    );
            }
        );
    }
}

export default ThingNetwork;
