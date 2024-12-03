import { Router } from "express"
import { RollMaterialController } from "../controllers/RollMaterialController"

const router = Router()

router.get('/', RollMaterialController.getAllRollMaterial)
router.post('/', RollMaterialController.createRollMaterial)
router.put('/:id/:lot', RollMaterialController.updateRollMaterial)

export default router