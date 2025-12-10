# Node.js Express Boilerplate Professional

Este es un boilerplate profesional para construir APIs RESTful con Node.js y Express. Está diseñado siguiendo las mejores prácticas de la industria, incluyendo una arquitectura por capas, manejo global de errores y configuración de seguridad.

Ideal para nuevos proyectos o como material de estudio para desarrolladores que retoman el backend.

## 🚀 Características

- **Arquitectura por Capas**: Separación clara de responsabilidades (Rutas, Controladores, Servicios).
- **ES Modules**: Uso moderno de JavaScript (`import`/`export`).
- **Full Stack**: Incluye un cliente React (Vite) en la carpeta `client/` para demostrar la conexión.
- **Seguridad**: Configurado con `helmet` y `cors`.
- **Manejo de Errores**: Middleware centralizado para respuestas de error consistentes.
- **Logging**: Configuración profesional con `winston`.
- **Configuración**: Variables de entorno con `dotenv`.

## 📂 Estructura del Proyecto

```
src/
├── config/         # Configuraciones globales
├── controllers/    # Maneja las peticiones HTTP (req, res)
├── middlewares/    # Middlewares de Express (Auth, ErrorHandler)
├── routes/         # Definición de endpoints
├── services/       # Lógica de negocio pura
├── utils/          # Utilidades (Logger, AppError)
├── app.js          # Configuración de Express
└── server.js       # Punto de entrada del servidor
```

## 🛠️ Instalación y Uso

1.  **Clonar el repositorio (o copiar los archivos):**

    ```bash
    git clone <url-del-repo>
    cd node-express-boilerplate
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Copia el archivo `.env.example` a `.env`:
    
    ```bash
    cp .env.example .env
    ```
    
    (En Windows: `copy .env.example .env`)

4.  **Iniciar el servidor:**

    - Modo Desarrollo (con watch):
      ```bash
      npm run dev
      ```
    - Modo Producción:
      ```bash
      npm start
      ```

5.  **Iniciar el Frontend (React):**

    Abre **otra terminal** (deja la del backend corriendo) y ejecuta:

    ```bash
    cd client
    npm install
    npm run dev
    ```

    Verás que la aplicación de React corre en `http://localhost:5173` (aproximadamente) y muestra los datos obtenidos del backend (puerto 3000).

## 📚 API Endpoints (Ejemplo)

### Users

- **GET /api/v1/users**: Obtener todos los usuarios.
- **GET /api/v1/users/:id**: Obtener un usuario por ID.
- **POST /api/v1/users**: Crear un usuario nuevo.

## 🧠 Filosofía de Diseño ("El Por qué")

Este boilerplate incluye comentarios en el código explicando el **razonamiento** detrás de cada decisión técnica. Busca "POR QUÉ:" en los archivos para entender los patrones utilizados.

### Capas

1.  **Routes**: Solo definen *qué* endpoints existen y a *quién* (controller) llamar.
2.  **Controllers**: Entienden de HTTP (status codes, headers, JSON). No saben de bases de datos ni lógica compleja.
3.  **Services**: Contienen la lógica de negocio. Son agnósticos del framework (no saben qué es `req` o `res`).

---

Hecho con ❤️ por Antigravity.
