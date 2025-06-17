import { Request, Response } from 'express';
import * as employeeService from '../services/employeeServices';


export const getAllEmployees = async (req: Request, res: Response) => {
    try {
        const companyId = req.query.companyId ? parseInt(req.query.companyId as string) : undefined;

        // Validar que companyId sea un número válido si se proporciona
        if (req.query.companyId && isNaN(companyId!)) {
            res.status(400).json({
                success: false,
                message: 'El ID de empresa debe ser un número válido'
            });
            return
        }

        const employees = await employeeService.getAllEmployees(companyId);

        res.status(200).json({
            success: true,
            data: employees,
            message: companyId
                ? `Empleados de la empresa ${companyId}`
                : 'Todos los empleados'
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};