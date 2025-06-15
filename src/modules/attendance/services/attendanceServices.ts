import { Op } from 'sequelize';
import Employee from '../../employee/models/EmployeeModel';
import { Attendance } from '../models/Attendance';

export async function createEntry(employeeId: number, entryTime: Date) {
    try {
        // Verificar que el empleado existe
        const employee = await Employee.findByPk(employeeId);
        if (!employee) {
            throw new Error('Empleado no encontrado');
        }

        // Verificar que no hay registro abierto
        const openAttendance = await getOpenAttendanceByEmployeeId(employeeId);
        if (openAttendance) {
            throw new Error('Ya existe un registro abierto para este empleado');
        }

        return await Attendance.create({ employeeId, entryTime });
    } catch (error) {
        throw error;
    }
}

export async function createExit(employeeId: number, exitTime: Date) {
    try {
        const openAttendance = await Attendance.findOne({
            where: {
                employeeId,
                exitTime: null,
            },
            order: [['entryTime', 'DESC']],
        });

        if (!openAttendance) {
            throw new Error('No hay registro de entrada para este empleado');
        }

        if (exitTime <= openAttendance.entryTime) {
            throw new Error('La hora de salida no puede ser anterior a la hora de entrada');
        }

        const durationMs = exitTime.getTime() - openAttendance.entryTime.getTime();
        const totalMinutes = Math.floor(durationMs / (1000 * 60));

        openAttendance.exitTime = exitTime;
        openAttendance.durationMinutes = totalMinutes;

        return await openAttendance.save();
    } catch (error: any) {
        throw new Error(error.message || 'Error desconocido al registrar la salida');
    }
}

export async function getAttendanceById(id: number) {
    try {
        if (!id || isNaN(id)) {
            throw new Error('ID inválido');
        }

        return await Attendance.findByPk(id, {
            include: [{
                model: Employee,
                as: 'employee',
                attributes: ['id', 'fullName', 'dni', 'position']
            }]
        });
    } catch (error) {
        throw error;
    }
}

export async function getAllAttendances() {
    try {
        return await Attendance.findAll({
            include: [{
                model: Employee,
                as: 'employee',
                attributes: ['id', 'fullName', 'dni', 'position']
            }],
            order: [['entryTime', 'DESC']]
        });
    } catch (error) {
        throw error;
    }
}

export async function getAttendancesByEmployeeId(employeeId: number) {
    try {
        if (!employeeId || isNaN(employeeId)) {
            throw new Error('ID de empleado inválido');
        }

        // Verificar que el empleado existe
        const employee = await Employee.findByPk(employeeId);
        if (!employee) {
            throw new Error('Empleado no encontrado');
        }

        return await Attendance.findAll({
            where: { employeeId },
            include: [{
                model: Employee,
                as: 'employee',
                attributes: ['id', 'fullName', 'dni', 'position']
            }],
            order: [['entryTime', 'DESC']]
        });
    } catch (error) {
        throw error;
    }
}

export async function deleteAttendance(id: number) {
    try {
        if (!id || isNaN(id)) {
            throw new Error('ID inválido');
        }

        const attendance = await Attendance.findByPk(id);
        if (!attendance) {
            return false;
        }

        await attendance.destroy();
        return true;
    } catch (error) {
        throw error;
    }
}

export async function getOpenAttendanceByEmployeeId(employeeId: number): Promise<Attendance | null> {
    try {
        if (!employeeId || isNaN(employeeId)) {
            throw new Error('ID de empleado inválido');
        }

        return await Attendance.findOne({
            where: {
                employeeId,
                exitTime: {
                    [Op.is]: null,
                },
            },
            order: [['entryTime', 'DESC']] // Por si hay múltiples registros abiertos
        });
    } catch (error: any) {
        throw new Error(`Error al buscar registro abierto: ${error.message}`);
    }
}