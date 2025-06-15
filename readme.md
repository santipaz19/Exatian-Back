## 🏢 Exactian Backend
Sistema de gestión de empleados y asistencias.

**Gestión de Empleados:** CRUD completo para empleados

**Control de Asistencias:** Registro de entradas y salidas con cálculo automático de duración

**API RESTful:** Endpoints bien estructurados y documentados

**Base de datos:** SQLite con Sequelize ORM

**TypeScript:** Tipado fuerte para mayor seguridad y productividad

**Arquitectura modular:** Código organizado por módulos y responsabilidades con principio DDD y SOLID


## 🛠️ Tecnologías

Node.js 
Express.js 
TypeScript 
Sequelize 
SQLite3
CORS 


## 👥 Empleados

| Método | Endpoint                | Descripción                          |
|--------|-------------------------|--------------------------------------|
| GET    | `/employees`        | Obtener todos los empleados          |
| GET    | `/employees/:id`    | Obtener empleado por ID              |
| POST   | `/employees`        | Crear nuevo empleado                 |
| PUT    | `/employees/:id`    | Actualizar empleado                   |
| DELETE | `/employees/:id`    | Eliminar empleado                    |

## 📋 Asistencias

| Método | Endpoint                         | Descripción                             |
|--------|----------------------------------|-----------------------------------------|
| GET    | `/attendance`                | Obtener todas las asistencias           |
| GET    | `/attendance/:id`            | Obtener asistencia por ID               |
| GET    | `/attendance/employee/:employeeId` | Obtener asistencias por empleado   |
| POST   | `/attendance/entry`          | Registrar entrada                       |
| POST   | `/attendance/exit`           | Registrar salida                        |
| DELETE | `/attendance/:id`            | Eliminar registro de asistencia         |


# Deploy:
https://exatian-back.onrender.com

En caso de utilizar el deploy esperar unos minutos a que se levante el servidor debido a que esta alojado en render y en el plan gratis al estar inactivo se apaga.

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/santipaz19/Exatian-Back.git
2. **Instalar dependencias: Usando npm:**

   npm install

## Ejecucion

Para iniciar el proyecto en modo desarrollo:
npm run dev

El proyecto se ejecutará en http://localhost:5000.



## 🏗️ Arquitectura
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



🚀 Despliegue
Render
El proyecto está configurado para desplegarse automáticamente en Render:

Conecta tu repositorio de GitHub
Configura las variables de entorno
Build Command: npm install
Start Command: npm start
