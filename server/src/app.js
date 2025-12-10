import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { AppError } from './utils/AppError.js';
import globalErrorHandler from './middlewares/errorHandler.js';

// Importar rutas (se crearán en el siguiente paso)
import userRoutes from './routes/user.routes.js';

const app = express();

/**
 * Middlewares Globales
 */

// POR QUÉ: Helmet ayuda a asegurar la app Express configurando varios headers HTTP.
app.use(helmet());

// POR QUÉ: Habilita CORS para permitir peticiones desde otros dominios (ej: frontend).
app.use(cors());

// POR QUÉ: Logger de peticiones HTTP para desarrollo.
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// POR QUÉ: Parser para leer el body de las peticiones (JSON).
app.use(express.json());

/**
 * Rutas
 */
app.use('/api/v1/users', userRoutes); // Descomentar cuando existan las rutas

// Ruta de prueba
/**
 * Manejo de rutas no encontradas (404)
 * 
 * POR QUÉ:
Si una petición llega a este punto, significa que ninguna ruta anterior la capturó.
 */
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

/**
 * Global Error Handler
 */
app.use(globalErrorHandler);

export default app;
