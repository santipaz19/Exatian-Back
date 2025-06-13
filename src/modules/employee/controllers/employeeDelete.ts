import { Request, Response } from 'express';
import * as employeeService from '../services/employeeServices';



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