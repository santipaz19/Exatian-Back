🏢 Exactian Backend
Un sistema de gestión de empleados y asistencias desarrollado con Node.js, Express, TypeScript y SQLite.
🚀 Características

Gestión de Empleados: CRUD completo para empleados
Control de Asistencias: Registro de entradas y salidas con cálculo automático de duración
API RESTful: Endpoints bien estructurados y documentados
Base de datos: SQLite con Sequelize ORM
TypeScript: Tipado fuerte para mayor seguridad y productividad
Arquitectura modular: Código organizado por módulos y responsabilidades

🛠️ Tecnologías

Node.js - Runtime de JavaScript
Express.js - Framework web
TypeScript - Superset tipado de JavaScript
Sequelize - ORM para base de datos
SQLite3 - Base de datos embebida
CORS - Middleware para manejo de CORS
dotenv - Gestión de variables de entorno


src/
├── config/
│   └── database.ts          # Configuración de base de datos
├── modules/
│   ├── attendance/          # Módulo de asistencias
│   │   ├── controllers/     # Controladores
│   │   │   ├── attendanceEntry.ts
│   │   │   ├── attendanceExit.ts
│   │   │   ├── attendanceGetAll.ts
│   │   │   ├── attendenceByEmp.ts
│   │   │   ├── attendenceById.ts
│   │   │   ├── attendenceDelete.ts
│   │   │   └── index.ts
│   │   ├── models/          # Modelos Sequelize
│   │   │   └── Attendance.ts
│   │   ├── routes/          # Rutas del módulo
│   │   │   └── attendanceRoutes.ts
│   │   └── services/        # Lógica de negocio
│   │       └── attendanceServices.ts
│   └── employee/            # Módulo de empleados
│       ├── controllers/     # Controladores
│       │   ├── employeeCreate.ts
│       │   ├── employeeDelete.ts
│       │   ├── employeeGetAll.ts
│       │   ├── employeeGetById.ts
│       │   ├── employeeUpdate.ts
│       │   └── index.ts
│       ├── models/          # Modelos Sequelize
│       ├── routes/          # Rutas del módulo
│       │   └── employeeRoutes.ts
│       └── services/        # Lógica de negocio
├── app.ts                   # Configuración de Express
├── server.ts               # Punto de entrada del servidor
└── utils.ts                # Utilidades generales
⚙️ Instalación
Prerrequisitos

Node.js (>=18.0.0)
npm o yarn

Pasos de instalación

Clonar el repositorio
bashgit clone https://github.com/santipaz19/Exatian-Back.git
cd Exatian-Back

Instalar dependencias
bashnpm install

Configurar variables de entorno
bashcp .env.example .env
Edita el archivo .env con tus configuraciones:
envPORT=3000
NODE_ENV=development
DB_NAME=exactian.db

Compilar TypeScript
bashnpm run build

Iniciar el servidor
bash# Desarrollo
npm run dev

# Producción
npm start


📚 API Endpoints
👥 Empleados
MétodoEndpointDescripciónGET/api/employeesObtener todos los empleadosGET/api/employees/:idObtener empleado por IDPOST/api/employeesCrear nuevo empleadoPUT/api/employees/:idActualizar empleadoDELETE/api/employees/:idEliminar empleado
📋 Asistencias
MétodoEndpointDescripciónGET/api/attendanceObtener todas las asistenciasGET/api/attendance/:idObtener asistencia por IDGET/api/attendance/employee/:employeeIdObtener asistencias por empleadoPOST/api/attendance/entryRegistrar entradaPOST/api/attendance/exitRegistrar salidaDELETE/api/attendance/:idEliminar registro de asistencia
🔧 Scripts Disponibles
bash# Desarrollo con hot reload
npm run dev

# Compilar TypeScript
npm run build

# Iniciar servidor en producción
npm start

# Linting (si está configurado)
npm run lint

# Testing (si está configurado)
npm test
📊 Ejemplos de Uso
Crear un empleado
bashcurl -X POST http://localhost:3000/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan.perez@example.com",
    "position": "Desarrollador",
    "salary": 50000
  }'
Registrar entrada
bashcurl -X POST http://localhost:3000/api/attendance/entry \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 1,
    "entryTime": "2024-01-15T08:00:00"
  }'
Registrar salida
bashcurl -X POST http://localhost:3000/api/attendance/exit \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 1,
    "exitTime": "2024-01-15T17:00:00"
  }'
🏗️ Arquitectura
El proyecto sigue una arquitectura modular basada en:

Controladores: Manejan las peticiones HTTP y respuestas
Servicios: Contienen la lógica de negocio
Modelos: Definen la estructura de datos con Sequelize
Rutas: Organizan los endpoints por módulos

🔒 Características de Seguridad

Validación de tipos con TypeScript
Manejo de errores centralizado
CORS configurado para peticiones cross-origin
Sanitización de datos de entrada

🚀 Despliegue
Render (Recomendado)
El proyecto está configurado para desplegarse automáticamente en Render:

Conecta tu repositorio de GitHub
Configura las variables de entorno
Build Command: npm install
Start Command: npm start
