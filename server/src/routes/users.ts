import express from "express";
import *  as usersController from '../controllers/users'
import authMiddleware from '../middlewares/auth'

const router = express.Router()

router.post('/', usersController.registration)
router.post('/login', usersController.login)
router.get('/user', authMiddleware, usersController.currentUser)

export default router
