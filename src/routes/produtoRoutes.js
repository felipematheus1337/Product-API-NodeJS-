import { Router } from 'express';
import produtoController from '../controllers/ProdutoController';

const router = new Router();

router.get('/', produtoController.index);
router.get('/:id', produtoController.show);
router.post('/', produtoController.store);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.delete);

export default router;
