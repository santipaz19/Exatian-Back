import { Router } from 'express';
import { createCompanie, getAllCompanies, updateCompanie, deleteCompanie, login } from '../controllers';

const router = Router();

router.post('/', createCompanie);
router.get('/', getAllCompanies);
router.put('/update/:id', updateCompanie);
router.delete('/:id', deleteCompanie);
router.post('/login', login);

export default router;
