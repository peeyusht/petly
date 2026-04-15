import mongoose, { Schema, type Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  phone?: string
  passwordHash: string
  role: 'user' | 'partner' | 'admin'
  languagePref: 'en' | 'hi'
  avatar?: string
  area?: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['user', 'partner', 'admin'], default: 'user' },
  languagePref: { type: String, enum: ['en', 'hi'], default: 'en' },
  avatar: { type: String },
  area: { type: String, trim: true },
}, { timestamps: true })

UserSchema.index({ email: 1 }, { unique: true })

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
