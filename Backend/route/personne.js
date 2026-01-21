const express = require('express');
const router= express.Router();

router.post("/ajouterpersonne", require('../controller/controller').ajouterpersonne);
router.get("/unepersonne/:id", require('../controller/controller').unepersonne);
router.put("/modifierpersonne/:id", require('../controller/controller').editerpersonne);
router.get("/toutespersonnes", require('../controller/controller').personnes);
router.delete("/supprimerpersonne/:id", require('../controller/controller').supprimerpersonne)
        

module.exports= router;