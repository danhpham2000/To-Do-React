const Router = require("express");

const router = Router();

router.get("/tasks");
router.post("/tasks");
router.delete("/tasks");

module.exports = router;
