import { Router } from 'express';


import { entry, exit, getAll, getById, getByEmployeeId, deleteAttendance } from '../controllers';

const router = Router();

router.post('/entry', entry);
router.post('/exit', exit);
router.get('/:id', getById);
router.get('/', getAll);
router.get('/employee/:employeeId', getByEmployeeId);
router.delete('/:id', deleteAttendance);

export default router;
