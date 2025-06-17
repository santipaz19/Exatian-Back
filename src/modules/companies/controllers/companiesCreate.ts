import { Request, Response } from 'express';
import * as companiesService from '../services/companiesServices';

export const createCompanie = async (req: Request, res: Response) => {
    try {
        const { name, phone, email, taxId, password } = req.body;

        // Validaciones básicas
        if (!name || !taxId || !password || !email) {
            res.status(400).json({
                success: false,
                message: 'Los campos name, taxId, password, email son requeridos'
            });
            return
        }

        const company = await companiesService.createCompany({
            name,
            phone,
            email,
            taxId,
            password
        });

        res.status(201).json({
            success: true,
            message: 'Empresa creada exitosamente',
            data: company
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || 'Error al crear la empresa'
        });
    }
};