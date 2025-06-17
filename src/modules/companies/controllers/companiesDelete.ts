import { Request, Response } from 'express';
import * as companiesService from '../services/companiesServices';

export const deleteCompanie = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Validar que el ID sea un número válido
        const companyId = parseInt(id);
        if (isNaN(companyId)) {
            res.status(400).json({
                success: false,
                message: 'ID de empresa inválido'
            });
            return
        }

        const deleted = await companiesService.deleteCompany(companyId);

        if (!deleted) {
            res.status(404).json({
                success: false,
                message: 'Empresa no encontrada'
            });
            return
        }

        res.status(200).json({
            success: true,
            message: 'Empresa eliminada exitosamente'
        });

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error al eliminar la empresa'
        });
    }
};