import { Request, Response } from 'express';
import * as companiesService from '../services/companiesServices';

export const getAllCompanies = async (req: Request, res: Response) => {
    try {
        const companies = await companiesService.getAllCompanies();

        res.status(200).json({
            success: true,
            message: 'Empresas obtenidas exitosamente',
            data: companies,
            total: companies.length
        });

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error al obtener las empresas'
        });
    }
};