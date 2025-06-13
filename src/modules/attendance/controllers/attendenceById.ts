import { Request, Response } from 'express';
import * as attendanceService from '../services/attendanceServices';



export async function getById(req: Request, res: Response) {
    const attendance = await attendanceService.getAttendanceById(Number(req.params.id));
    if (!attendance) { res.status(404).json({ message: 'Attendance not found' }); return }
    res.json(attendance);
}
