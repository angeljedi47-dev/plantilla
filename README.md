# Radiant Protostar (Full Stack Boilerplate)

Este proyecto es un monorepo que contiene tanto el Backend como el Frontend de la aplicación.

## Estructura de Carpetas

La separación es estricta para mantener las responsabilidades claras:

- **📂 [server](./server)**: El Backend hecho con Node.js y Express.
    - Corre en: `http://localhost:3000`
    - Contiene: API, Lógica de negocio, Conexión a DB.
- **📂 [client](./client)**: El Frontend hecho con React y Vite.
    - Corre en: `http://localhost:5173`
    - Contiene: Interfaz de usuario, Componentes React.

## 🚀 Cómo Iniciar

Necesitarás **dos terminales** abiertas:

### Terminal 1: Backend
```bash
cd server
npm run dev
```

### Terminal 2: Frontend
```bash
cd client
npm run dev
```

---
