
import { Request, Response } from 'express';
import * as attendanceService from '../services/attendanceServices';


export async function exit(req: Request, res: Response) {
    const { employeeId, exitTime } = req.body;
    if (!employeeId || !exitTime) {
        res.status(400).json({ message: 'employeeId y exitTime son requeridos' });
        return
    }
    try {
        const attendance = await attendanceService.createExit(employeeId, new Date(exitTime));
        res.json(attendance);
        return
    } catch (error: any) {
        res.status(400).json({ message: error.message });
        return
    }
}