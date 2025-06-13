import { Router } from 'express';
import { createEmployee, deleteEmployee, getAllEmployees, getEmployee, updateEmployee } from '../controllers';

const router = Router();

router.post('/', createEmployee);
router.get('/:id', getEmployee);
router.get('/', getAllEmployees);
router.put('/update/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;
