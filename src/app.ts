import express, { Application, urlencoded } from "express";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import Controller from "interfaces/controller.interface";
import ErrorMiddlware from "@/middleware/error.middleware";
import helmet from "helmet";

class App {
    public express: Application;
    public port: number;

    constructor(controllers: Controller[], port: number) {
        this.express = express();
        this.port = port;

        this.initializeDatabaseConnection();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    private initializeMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan("dev"));
        this.express.use(express.json());
        this.express.use(urlencoded({ extended: false }));
        this.express.use(compression());
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.express.use("/api", controller.router);
        });
    }

    private initializeErrorHandling(): void {
        this.express.use(ErrorMiddlware);
    }

    private initializeDatabaseConnection(): void {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_DBNAME } =
            process.env;

        mongoose.connect(
            `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DBNAME}?retryWrites=true&w=majority`
        );
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`[app.ts] App listening on port ${this.port}`);
        });
    }
}

export default App;
