import { Request, Response } from 'express';
import * as attendanceService from '../services/attendanceServices';


export async function getByEmployeeId(req: Request, res: Response) {
    const employeeId = Number(req.params.employeeId);
    if (isNaN(employeeId)) {
        res.status(400).json({ message: 'employeeId inválido' });
        return
    }
    try {
        const attendances = await attendanceService.getAttendancesByEmployeeId(employeeId);
        res.json(attendances);
    } catch (error: any) {
        res.status(500).json({ message: error.message });

    }
}