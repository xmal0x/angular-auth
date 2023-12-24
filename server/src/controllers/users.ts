import { NextFunction, Request, Response } from 'express'

import UserModel from '../models/user'
import { Error } from 'mongoose'
import { UserDocument } from '../types/user.interface'
import jsonwebtoken from 'jsonwebtoken'
import { secret } from '../config'
import { ExpressRequestInterface } from '../types/expressRequest.interface'


const normalizeUser = (user: UserDocument) => {
    const token = jsonwebtoken.sign({ id: user.id, email: user.email }, secret)

    return {
        email: user.email,
        username: user.username,
        token: `Bearer ${token}`,
        id: user.id,
    }
}

export const registration = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = new UserModel({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        })

        const saved = await newUser.save()
        res.send(normalizeUser(saved))
    } catch (err) {
        if (err instanceof Error.ValidationError) {
            const messages = Object.values(err.errors).map(err => err.message)
            return res.status(422).json(messages)
        }
        next(err)
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email }).select('+password')
        const error = { emailOrPassword: 'Incorrect email or password' }

        if (!user) {
            return res.status(400).json(error)
        }

        const isCorrectPassword = await user.validatePassword(req.body.password)

        if (!isCorrectPassword) {
            return res.status(400).json(error)
        }

        res.send(normalizeUser(user))
    } catch (err) {
        next(err)
    }
}

export const currentUser = (req: ExpressRequestInterface, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.sendStatus(401)
    }
    res.send(normalizeUser(req.user))
}
