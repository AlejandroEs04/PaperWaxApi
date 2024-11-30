"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PaperTypeController_1 = require("../controllers/PaperTypeController");
const router = (0, express_1.Router)();
router.get('/', PaperTypeController_1.PaperTypeController.getAllPaperType);
router.post('/', PaperTypeController_1.PaperTypeController.createPaperType);
router.put('/:id', PaperTypeController_1.PaperTypeController.updatePaperType);
exports.default = router;
//# sourceMappingURL=PaperTypeRoutes.js.map