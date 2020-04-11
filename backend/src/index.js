const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rotas e recursos
 */

 /**
  * Métodos HTTP
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma infomação no back-end
  * DELETE: Deleta uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recurso 
   * Request Body: O corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc...
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: tabela('user').select('*').where()
     * knex.js
     */



app.listen(3333); //Ouve a porta 3333