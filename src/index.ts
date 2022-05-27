import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/validateEnv";
import App from "./app";
import ThingController from "@/resources/thing/thing.controller";

validateEnv();

const app = new App([new ThingController()], Number(process.env.PORT));

app.listen();
