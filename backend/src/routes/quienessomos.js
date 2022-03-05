const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req,res) => res.send('Quienes Somos'));


module.exports = router;