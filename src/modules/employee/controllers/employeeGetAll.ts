import { Request, Response } from 'express';
import * as employeeService from '../services/employeeServices';


export async function getAllEmployees(req: Request, res: Response) {
    try {
        const employees = await employeeService.getAllEmployees();
        res.json(employees);
    } catch (err: any) {
        res.status(500).json({ message: 'Error al obtener empleados' });
    }
}
