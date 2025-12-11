import logger from '../utils/logger.js';

/**
 * Global Error Handler Middleware.
 * 
 * POR QUÉ:
 * Centralizar el manejo de errores evita tener bloques try-catch 
 * repetidos en cada controlador. Captura cualquier error que ocurra
 * en el flujo de la solicitud y envía una respuesta consistente al cliente.
 */
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError.js';

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else {
        // Aquí se pueden añadir manejadores específicos para errores de DB, JWT, etc.
        let error = { ...err };
        error.message = err.message;
        sendErrorProd(error, res);
    }
};

const sendErrorDev = (err: any, res: Response) => {
    logger.error('ERROR 💥', err);
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorProd = (err: any, res: Response) => {
    // Errores operacionales, confiables: enviar mensaje al cliente
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        // Error de programación u otro error desconocido: no filtrar detalles del error
        logger.error('ERROR 💥', err);
        res.status(500).json({
            status: 'error',
            message: 'Something went very wrong!',
        });
    }
};

export default globalErrorHandler;
