import { Router } from 'express';
import produtoController from '../controllers/ProdutoController';
import login from '../middlewares/login';

const router = new Router();

router.get('/', produtoController.index);
router.get('/:id', login, produtoController.show);
router.post('/', login, produtoController.store);
router.put('/:id', login, produtoController.update);
router.delete('/:id', login, produtoController.delete);

export default router;
