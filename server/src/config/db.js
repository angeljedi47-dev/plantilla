import dotenv from 'dotenv';
dotenv.config();

/**
 * Configuración de Base de Datos
 * 
 * POR QUÉ:
 * Centralizar la configuración permite validar que las variables requeridas existan
 * y da un único punto de verdad para toda la app.
 */
const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

// Ejemplo de validación (opcional pero recomendada)
// if (!dbConfig.host) {
//   throw new Error('DB_HOST environment variable is missing');
// }

export default dbConfig;
