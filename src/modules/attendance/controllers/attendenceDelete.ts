
import { Request, Response } from 'express';
import * as attendanceService from '../services/attendanceServices';


export async function deleteAttendance(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
        const deleted = await attendanceService.deleteAttendance(id);
        if (!deleted) {
            res.status(404).json({ message: 'Registro de asistencia no encontrado' });
            return
        }
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
