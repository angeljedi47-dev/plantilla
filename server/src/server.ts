import dotenv from 'dotenv';
// Cargar variables de entorno ANTES de importar app
dotenv.config();

import app from './app.js';
import logger from './utils/logger.js';

/**
 * Server Entry Point
 * 
 * POR QUÉ:
 * Separamos 'server.js' de 'app.js'. 'app.js' contiene la lógica de Express
 * y 'server.js' se encarga de todo lo relacionado con el servidor, la red,
 * y la conexión a base de datos. Esto facilita el testing de 'app' sin levantar el servidor.
 */

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

/**
 * Manejo de Unhandled Rejections
 * 
 * POR QUÉ:
 * Captura promesas rechazadas que no han sido manejadas (ej: fallo de conexión a DB).
 * Es buena práctica cerrar el servidor ordenadamente antes de salir.
 */
process.on('unhandledRejection', (err: Error) => {
    logger.error('UNHANDLED REJECTION! 💥 Shutting down...');
    logger.error(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
