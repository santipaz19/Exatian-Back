import { Request, Response } from 'express';
import * as companiesService from '../services/companiesServices';

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Validaciones básicas
        if (!email || !password) {
            res.status(400).json({
                success: false,
                message: 'Los campos email y password son requeridos'
            });
            return
        }

        const company = await companiesService.loginCompany(email, password);

        res.status(200).json({
            success: true,
            message: 'Login exitoso',
            data: company
        });

    } catch (error: any) {
        res.status(401).json({
            success: false,
            message: error.message || 'Error en el login'
        });
    }
};