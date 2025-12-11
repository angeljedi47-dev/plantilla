import winston from 'winston';

/**
 * Configuración de Winston Logger.
 * 
 * POR QUÉ:
 * Un logger dedicado es mejor que console.log porque permite
 * niveles de log (info, warn, error), formatos estructurados (JSON),
 * y transportes múltiples (archivo, consola, servicios externos).
 * Esto es crucial para debugging y monitoreo en producción.
 */

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Escribir todos los logs con nivel `error` (y inferiores) a `error.log`.
        // - Escribir todos los logs con nivel `info` (y inferiores) a `combined.log`.
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//
// Si no estamos en producción, también logueamos a la consola con un formato simple.
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        ),
    }));
}

export default logger;
