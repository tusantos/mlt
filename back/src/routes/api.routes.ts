import { Router } from 'express';

import mercadolivreService from '../services/mercadolivre.service';

const apiRoutes = Router();

apiRoutes.get('/items/:id', mercadolivreService.getProduct);
apiRoutes.get('/items', mercadolivreService.searchProducts);

export default apiRoutes;
