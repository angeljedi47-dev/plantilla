import { Request, Response, NextFunction } from 'express';
import userService from '../services/user.service.js';

/**
 * Controller Layer: Manejo de HTTP
 * 
 * POR QUÉ:
 * El controlador solo debe ocuparse de recibir la petición (req),
 * extraer los datos necesarios, pasarlos al servicio correspondiente,
 * y enviar la respuesta (res) adecuada.
 * NO debe contener lógica de negocio compleja.
 */

// Usamos una función wrapper para capturar errores asíncronos sin try-catch explícitos
// Alternativamente, se puede usar una librería como 'express-async-errors' o un wrapper utilitario.
const catchAsync = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next);
    };
};

export const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const users = await userService.getAllUsers();

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: { users }
    });
});

export const getUser = catchAsync(async (req: Request, res: Response) => {
    const user = await userService.getUserById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: { user }
    });
});

export const createUser = catchAsync(async (req: Request, res: Response) => {
    const newUser = await userService.createUser(req.body);

    res.status(201).json({
        status: 'success',
        data: { user: newUser }
    });
});
