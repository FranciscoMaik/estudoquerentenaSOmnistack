const express = require('express');
const OngsController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileIncidents = require('./controllers/ProfileController');
const SessionControllers = require('./controllers/SessionController');


const routes = express.Router();

//Fazendo Login
routes.post('/sessions',SessionControllers.create);

//Listagem de ongs
routes.get('/ongs', OngsController.index);

//Cadastro de ongs
routes.post('/ongs', OngsController.create);

//Listando todos os Casos
routes.get('/incidents', IncidentsController.index);

//Cadastro de Casos
routes.post('/incidents', IncidentsController.create);

//Deletando um Caso
routes.delete('/incidents/:id', IncidentsController.delete);

//Listando totos os casos de uma ong especifica
routes.get('/profile', ProfileIncidents.index);


module.exports = routes;