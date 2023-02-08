const express = require('express');
const AnnotationController = require('./controllers/AnnotationController');
const routes = express.Router();

const AnnotetionControler = require('./controllers/AnnotationController');

routes.post('/annotations', AnnotetionControler.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

module.exports = routes;
