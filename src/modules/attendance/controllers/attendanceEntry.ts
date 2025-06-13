import { Request, Response } from 'express';
import * as attendanceService from '../services/attendanceServices';

export async function entry(req: Request, res: Response) {
    const { employeeId, entryTime } = req.body;
    if (!employeeId || !entryTime) {
        res.status(400).json({ message: 'employeeId and entryTime are required' });
        return
    }
    const openAttendance = await attendanceService.getOpenAttendanceByEmployeeId(employeeId);
    if (openAttendance) {
        res.status(400).json({ message: 'Ya existe un registro abierto para este empleado' });
        return;
    }
    const attendance = await attendanceService.createEntry(employeeId, new Date(entryTime));
    res.status(201).json(attendance);
    return
}
