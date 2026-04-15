import mongoose, { Schema, type Document, type Types } from 'mongoose'

export interface IPet extends Document {
  owner: Types.ObjectId
  name: string
  species: 'dog' | 'cat' | 'bird' | 'rabbit' | 'other'
  breed?: string
  age?: number
  weight?: number
  gender?: 'male' | 'female'
  photo?: string
  createdAt: Date
  updatedAt: Date
}

const PetSchema = new Schema<IPet>({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true, trim: true },
  species: { type: String, enum: ['dog', 'cat', 'bird', 'rabbit', 'other'], default: 'dog' },
  breed: { type: String, trim: true },
  age: { type: Number },
  weight: { type: Number },
  gender: { type: String, enum: ['male', 'female'] },
  photo: { type: String },
}, { timestamps: true })

export const Pet = mongoose.models.Pet || mongoose.model<IPet>('Pet', PetSchema)
