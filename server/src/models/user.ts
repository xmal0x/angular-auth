import { model, Schema } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

import { UserDocument } from '../types/user.interface'

const userSchema = new Schema<UserDocument>({
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false,
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: [validator.isEmail, 'Invalid email'],
        unique: true,
        createIndexes: { unique: true },
    },
}, { timestamps: true })

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next()
    }

    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        return next()
    } catch (err) {
        return next(err as Error)
    }
})

userSchema.methods.validatePassword = function(password: string) {
    return bcrypt.compare(password, this.password)
}

export default model<UserDocument>('User', userSchema)
