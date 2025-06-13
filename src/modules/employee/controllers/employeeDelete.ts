import { Request, Response } from 'express';
import * as employeeService from '../services/employeeServices';

export async function createEmployee(req: Request, res: Response) {
    try {
        const { fullName, dni, email, position, hireDate, isActive } = req.body;
        const employee = await employeeService.createEmployee({
            fullName,
            dni,
            email,
            position,
            hireDate,
            isActive,
        });
        res.status(201).json(employee);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
}

export async function getEmployee(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const employee = await employeeService.getEmployeeById(id);
        if (!employee) { res.status(404).json({ message: 'Empleado no encontrado' }); return }
        res.json(employee);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}

export async function getAllEmployees(req: Request, res: Response) {
    try {
        const employees = await employeeService.getAllEmployees();
        res.json(employees);
    } catch (err: any) {
        res.status(500).json({ message: 'Error al obtener empleados' });
    }
}

export async function updateEmployee(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;

        const updatedEmployee = await employeeService.updateEmployee(id, data);
        if (!updatedEmployee) {
            res.status(404).json({ message: 'Empleado no encontrado' });
            return
        }
        res.json(updatedEmployee);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
}

export async function deleteEmployee(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
        const deleted = await employeeService.deleteEmployee(id);
        if (!deleted) {
            res.status(404).json({ message: 'Empleado no encontrado' });
            return
        }
        res.status(200).json({ message: 'Empleado eliminado correctamente' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}