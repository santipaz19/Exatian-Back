import { Request, Response } from 'express';
import * as attendanceService from '../services/attendanceServices';



export async function getAll(req: Request, res: Response) {
    const attendances = await attendanceService.getAllAttendances();
    res.json(attendances);
    return
}