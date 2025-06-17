import { Request, Response } from 'express';
import * as attendanceService from '../services/attendanceServices';



export async function getAll(req: Request, res: Response) {
    // Obtener el companyId del query parameter si existe
    const companyId = req.query.companyId ? parseInt(req.query.companyId as string) : undefined;

    // Validar que companyId sea un número válido si se proporciona
    if (req.query.companyId && isNaN(companyId!)) {
        res.status(400).json({
            success: false,
            message: 'El ID de empresa debe ser un número válido'
        });
        return
    }

    const attendances = await attendanceService.getAllAttendances(companyId);
    res.json(attendances);
    return
}