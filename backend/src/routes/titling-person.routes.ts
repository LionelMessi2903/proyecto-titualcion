import { Router } from 'express';
import { TitlingPersonController } from '../controllers/TitlingPersonController';

const router = Router();
const titlingPersonController = new TitlingPersonController();

router.get('/titling-people', titlingPersonController.getAllTitlingPeople);
router.get('/titling-people/:id', titlingPersonController.getTitlingPersonById);
router.post('/titling-people', titlingPersonController.createTitlingPerson);
router.put('/titling-people/:id', titlingPersonController.updateTitlingPerson);
router.delete('/titling-people/:id', titlingPersonController.deleteTitlingPerson);

export default router;
