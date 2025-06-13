import { Request, Response } from 'express';
import * as employeeService from '../services/employeeServices';



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
