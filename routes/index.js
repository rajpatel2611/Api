const express = require('express');

const routes = express.Router();

const registercontroller = require('../controllers/registercontroller');

routes.post('/register',registercontroller.register);

routes.get('/view',registercontroller.view);

routes.delete('/deletedata',registercontroller.deletedata);

routes.put('/edit',registercontroller.edit);

routes.post('/login',registercontroller.login);


module.exports = routes;