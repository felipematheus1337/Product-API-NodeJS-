import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';
import login from '../middlewares/login';

const router = new Router();

router.get('/', login, usuarioController.index);
router.get('/:id', login, usuarioController.show);
router.post('/', usuarioController.store);
router.put('/:id', login, usuarioController.update);
router.delete('/:id', login, usuarioController.delete);

export default router;
