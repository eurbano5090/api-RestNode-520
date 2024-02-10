const express = require("express");
const router = express.Router();



const { getUsers,getUserById,createUser,deleteUser } = require('../controller/index.controller')

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Retorna una lista de todos los usuarios.
 *     responses:
 *       '200':
 *         description: Lista de usuarios obtenida correctamente
 */
router.get('/users', getUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Obtiene un usuario por Id
 *     description: Retorna los datos de un usuario segun Id proporcionado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id del usuario a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Usuario encontrado por Id 
 */
router.get('/users/:id', getUserById);

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Crea un usuario
 *     description: Crea un nuevo usuario con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               contact:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               status:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Usuario creado correctamente
 */
router.post('/users',createUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Elimina un usuario 
 *     description: Elimina un usuario segun el Id proporcionado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id del usuario a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Usuario eliminado correctamente
 */
router.delete('/users/:id',deleteUser);

module.exports=router;