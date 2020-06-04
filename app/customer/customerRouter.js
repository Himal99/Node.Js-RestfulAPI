const express = require('express');

const router = express.Router();


const controller = require('./controller/customerController');
console.log(controller)
router.get('/', (req, resp) => {
    controller.index(req, resp);
});

router.get('/create', (req, resp) => {
    controller.create(req, resp);
});

router.get('/json', (req, resp) => {
    controller.json(req, resp);
});

router.get('/edit/:id', (req, resp) => {
    controller.edit(req, resp);
});

router.get('/delete/:id', (req, resp) => {
    controller.delete(req, resp);
});


router.post('/', (req, resp) => {
    controller.save(req, resp);
});


module.exports = router;