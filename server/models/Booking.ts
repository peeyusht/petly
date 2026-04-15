import mongoose, { Schema, type Document, type Types } from 'mongoose'

export interface IBooking extends Document {
  user: Types.ObjectId
  provider: Types.ObjectId
  pet?: Types.ObjectId
  serviceType: string
  date: Date
  timeSlot: string
  package: 'Basic' | 'Standard' | 'Premium'
  price: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const BookingSchema = new Schema<IBooking>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  provider: { type: Schema.Types.ObjectId, ref: 'ServiceProvider', required: true, index: true },
  pet: { type: Schema.Types.ObjectId, ref: 'Pet' },
  serviceType: { type: String, required: true },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  package: { type: String, enum: ['Basic', 'Standard', 'Premium'], default: 'Standard' },
  price: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'confirmed' },
  notes: { type: String },
}, { timestamps: true })

BookingSchema.index({ date: 1, provider: 1 })

export const Booking = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema)
