import { Router } from 'express';
import { RoleController } from '../controllers/RoleController';

const router = Router();
const roleController = new RoleController();

router.get('/roles', roleController.getAllRoles);
router.get('/roles/:id', roleController.getRoleById);
router.post('/roles', roleController.createRole);
router.put('/roles/:id', roleController.updateRole);
router.delete('/roles/:id', roleController.deleteRole);

export default router;
