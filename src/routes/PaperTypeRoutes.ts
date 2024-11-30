import { Router } from "express"
import { PaperTypeController } from "../controllers/PaperTypeController"

const router = Router()

router.get('/', PaperTypeController.getAllPaperType)
router.post('/', PaperTypeController.createPaperType)
router.put('/:id', PaperTypeController.updatePaperType)

export default router