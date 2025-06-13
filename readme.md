🏢 Exactian Backend
Un sistema de gestión de empleados y asistencias desarrollado con Node.js, Express, TypeScript y SQLite.
🚀 Características

Gestión de Empleados: CRUD completo para empleados

Control de Asistencias: Registro de entradas y salidas con cálculo automático de duración

API RESTful: Endpoints bien estructurados y documentados

Base de datos: SQLite con Sequelize ORM

TypeScript: Tipado fuerte para mayor seguridad y productividad

Arquitectura modular: Código organizado por módulos y responsabilidades con principio DDD y SOLID


🛠️ Tecnologías

Node.js 
Express.js 
TypeScript 
Sequelize 
SQLite3
CORS 


## 👥 Empleados

| Método | Endpoint                | Descripción                          |
|--------|-------------------------|--------------------------------------|
| GET    | `/api/employees`        | Obtener todos los empleados          |
| GET    | `/api/employees/:id`    | Obtener empleado por ID              |
| POST   | `/api/employees`        | Crear nuevo empleado                 |
| PUT    | `/api/employees/:id`    | Actualizar empleado                   |
| DELETE | `/api/employees/:id`    | Eliminar empleado                    |

## 📋 Asistencias

| Método | Endpoint                         | Descripción                             |
|--------|----------------------------------|-----------------------------------------|
| GET    | `/api/attendance`                | Obtener todas las asistencias           |
| GET    | `/api/attendance/:id`            | Obtener asistencia por ID               |
| GET    | `/api/attendance/employee/:employeeId` | Obtener asistencias por empleado   |
| POST   | `/api/attendance/entry`          | Registrar entrada                       |
| POST   | `/api/attendance/exit`           | Registrar salida                        |
| DELETE | `/api/attendance/:id`            | Eliminar registro de asistencia         |
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

🔧 Scripts Disponibles
bash# Desarrollo con hot reload
npm run dev

# Compilar TypeScript
npm run build

# Iniciar servidor en producción
npm start


🏗️ Arquitectura
El proyecto sigue una arquitectura modular basada en:

Controladores: Manejan las peticiones HTTP y respuestas
Servicios: Contienen la lógica de negocio
Modelos: Definen la estructura de datos con Sequelize
Rutas: Organizan los endpoints por módulos

## Estructura del Proyecto

```plaintext
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
├── server.ts                # Punto de entrada del servidor
└── utils.ts                 # Utilidades generales

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
