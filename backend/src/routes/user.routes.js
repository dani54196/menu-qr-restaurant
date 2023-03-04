import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: id of user auto incremental
 *        email:
 *          type: string
 *          description: email of the user
 *        password:
 *          type: string
 *          description: the password hashed of the user
 *        firstName:
 *          type: string
 *          description: the name of the user
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: My@first.user
 *        password: mypassword
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found user
 *      example:
 *        msg: User was not found
 *
 *  parameters:
 *    Id:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the user id
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users endpoint
 */

/**
 * @swagger
 * /user:
 *  get:
 *    summary: Returns a list of users
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: the list of users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/models/User'
 */
router.get("/", userControllers.getAllUsers);
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Returns a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: User not found
 */
router.get("/:id", userControllers.getUser);
router.delete("/:id", userControllers.deleteUser);
router.put("/:id", userControllers.updateUser);

export default router;
