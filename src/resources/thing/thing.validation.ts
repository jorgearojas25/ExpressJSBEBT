import Joi from "joi";

const create = Joi.object({
    testName: Joi.string().required(),
    active: Joi.bool().required(),
    numberProp: Joi.number(),
    dateProp: Joi.date(),
    numberRangeProp: Joi.number(),
    arrayProp: Joi.array(),
    someId: Joi.string(),
});

export default { create };
