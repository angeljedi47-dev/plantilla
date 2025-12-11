import { AppError } from '../utils/AppError.js';

interface User {
    id: number;
    name: string;
    email: string;
}

// Mock database
const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

/**
 * Service Layer: Lógica de Negocio
 * 
 * POR QUÉ:
 * El servicio es independiente del framework HTTP (Express).
 * Recibe datos puros, aplica reglas de negocio, y interactúa con la capa de datos.
 * Esto hace que la lógica sea reutilizable (ej: desde un script CLI) y fácil de testear.
 */
class UserService {

    async getAllUsers(): Promise<User[]> {
        // Simular llamada a base de datos
        return users;
    }

    async getUserById(id: string): Promise<User> {
        const user = users.find(u => u.id === parseInt(id));

        if (!user) {
            // Lanzamos un error operacional que el Global Error Handler capturará
            throw new AppError('User not found', 404);
        }

        return user;
    }

    async createUser(data: Omit<User, 'id'>): Promise<User> {
        // Validación de negocio (simple)
        if (!data.name || !data.email) {
            throw new AppError('Name and email are required', 400);
        }

        const newUser: User = {
            id: users.length + 1,
            ...data
        };

        users.push(newUser);
        return newUser;
    }
}

export default new UserService();
