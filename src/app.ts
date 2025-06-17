import express from 'express';
import cors from 'cors';
import attendanceRoutes from './modules/attendance/routes/attendanceRoutes';
import employeeRoutes from './modules/employee/routes/employeeRoutes';
import companiesRoutes from './modules/companies/routes/companiesRoutes';
import sequelize from './config/database';

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'https://exactian-front.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

// Rutas
app.use('/attendance', attendanceRoutes);
app.use('/employees', employeeRoutes);
app.use('/companies', companiesRoutes);

sequelize.sync().then(() => {
    console.log('Base de datos conectada y sincronizada');
});

export default app;
