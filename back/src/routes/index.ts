import { Router } from 'express';

import apiRoutes from './api.routes';

const routes = Router();
routes.use('/v1/api', apiRoutes);

export default routes;
