import { NextFunction, Request, Response } from "express";
import { body,validationResult  } from "express-validator";

const handleValidatioErrors = async (req: Request, res: Response, next: NextFunction ) => {
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
}

export const validatorMyUserRequest = [
    body("name")?.optional().isString().notEmpty().withMessage("Name must be string"),
    body("addressLine").isString().notEmpty().withMessage("address line must be string"),
    body("city").isString().notEmpty().withMessage("City must be string"),
    body('state').isString().notEmpty().withMessage('state must be string'),
    body("country").isString().notEmpty().withMessage("Country must be string"),
    body("postalCode").isNumeric().notEmpty().withMessage("City must be string"),
    handleValidatioErrors
]