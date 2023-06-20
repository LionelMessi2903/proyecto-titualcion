import { Router } from 'express';
import { RequestController } from '../controllers/RequestController';
import { RequestService } from '../services/RequestService';

const router = Router();
const requestService = new RequestService(); // Crea una instancia de tu servicio
const requestController = new RequestController(requestService); // Pasa el servicio como argumento

router.get('/requests', requestController.getAllRequests.bind(requestController));
router.get('/requests/:id', requestController.getRequestById.bind(requestController));
router.post('/requests', requestController.createRequest.bind(requestController));
router.put('/requests/:id', requestController.updateRequest.bind(requestController));
router.delete('/requests/:id', requestController.deleteRequest.bind(requestController));

export default router;
