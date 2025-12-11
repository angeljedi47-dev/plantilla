import express from 'express';
import * as userController from '../controllers/user.controller.js';

const router = express.Router();

/**
 * Route Definitions
 * 
 * POR QUÉ:
 * Separamos las definiciones de rutas en archivos propios por recurso
 * para mantener el archivo principal (app.js) limpio y modular.
 */

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route('/:id')
    .get(userController.getUser);

export default router;
