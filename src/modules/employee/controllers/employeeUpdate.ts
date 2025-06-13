import { Request, Response } from 'express';
import * as employeeService from '../services/employeeServices';


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

