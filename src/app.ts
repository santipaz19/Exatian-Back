import express from 'express';
import cors from 'cors';
import attendanceRoutes from './modules/attendance/routes/attendanceRoutes';
import employeeRoutes from './modules/employee/routes/employeeRoutes';
import sequelize from './config/database';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

// Rutas
app.use('/attendance', attendanceRoutes);
app.use('/employees', employeeRoutes);

sequelize.sync().then(() => {
    console.log('Base de datos conectada y sincronizada');
});

export default app;
