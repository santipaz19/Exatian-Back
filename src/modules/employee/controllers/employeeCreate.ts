import { Request, Response } from 'express';
import * as employeeService from '../services/employeeServices';

export async function createEmployee(req: Request, res: Response) {
    try {
        const { fullName, dni, email, position, hireDate, isActive } = req.body;

        // Validaciones de campos requeridos
        if (!fullName || !dni || !email || !position) {
            res.status(400).json({
                message: 'Los campos fullName, dni, email y position son requeridos'
            });
            return;
        }

        // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).json({
                message: 'El formato del email no es válido'
            });
            return;
        }

        // Normalizar datos
        const employeeData = {
            fullName: fullName.trim(),
            dni: dni.trim(),
            email: email.trim().toLowerCase(),
            position: position.trim(),
            hireDate: hireDate || new Date(), // Usar fecha actual si no se proporciona
            isActive: isActive !== undefined ? isActive : true, // Por defecto activo
        };

        const employee = await employeeService.createEmployee(employeeData);

        res.status(201).json({
            message: 'Empleado creado exitosamente',
            data: employee
        });

    } catch (err: any) {


        if (err.message.includes('duplicate') || err.message.includes('unique')) {
            res.status(409).json({
                message: 'Ya existe un empleado con estos datos'
            });
            return;
        }

        // Error genérico 
        console.error('Error al crear empleado:', err);
        res.status(500).json({
            message: 'Error interno del servidor al crear el empleado'
        });
    }
}