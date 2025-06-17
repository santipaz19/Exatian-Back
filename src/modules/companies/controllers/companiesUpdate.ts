import { Request, Response } from 'express';
import * as companiesService from '../services/companiesServices';

export const updateCompanie = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Validar que el ID sea un número válido
        const companyId = parseInt(id);
        if (isNaN(companyId)) {
            res.status(400).json({
                success: false,
                message: 'ID de empresa inválido'
            });
        }

        // Validar que se envíen datos para actualizar
        if (Object.keys(updateData).length === 0) {
            res.status(400).json({
                success: false,
                message: 'No se enviaron datos para actualizar'
            });
            return
        }

        const updatedCompany = await companiesService.updateCompany(companyId, updateData);

        if (!updatedCompany) {
            res.status(404).json({
                success: false,
                message: 'Empresa no encontrada'
            });
            return
        }

        res.status(200).json({
            success: true,
            message: 'Empresa actualizada exitosamente',
            data: updatedCompany
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || 'Error al actualizar la empresa'
        });
    }
};