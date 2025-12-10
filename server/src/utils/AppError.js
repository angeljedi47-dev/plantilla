/**
 * AppError class for operational errors.
 * 
 * POR QUÉ:
 * Extender la clase Error nativa nos permite añadir propiedades personalizadas
 * como 'statusCode' y 'status' (fail/error) que son útiles
 * para el manejador de errores global. Esto nos ayuda a distinguir
 * entre errores operacionales (esperados, como 404 Not Found)
 * y errores de programación (bugs).
 */
export class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        // Capturamos el stack trace para saber dónde ocurrió el error
        Error.captureStackTrace(this, this.constructor);
    }
}
