import mongoose, { Schema, type Document, type Types } from 'mongoose'

export interface IServiceProvider extends Document {
  user?: Types.ObjectId
  businessName: string
  types: string[]
  description?: string
  icon?: string
  area: string
  address?: string
  phone?: string
  rating: number
  reviewsCount: number
  verified: boolean
  policeVerified: boolean
  experience?: number
  pricing?: Record<string, number>
  price?: string
  unit?: string
  availability: 'available' | 'busy' | 'offline'
  specialties?: string[]
  operatingHours?: string
  tags?: string[]
  plan?: 'basic' | 'featured' | 'elite'
  applicationStatus: 'pending' | 'approved' | 'rejected'
  createdAt: Date
  updatedAt: Date
}

const ServiceProviderSchema = new Schema<IServiceProvider>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  businessName: { type: String, required: true, trim: true },
  types: [{ type: String, enum: ['walking', 'grooming', 'stores', 'vets', 'boarding', 'training'] }],
  description: { type: String },
  icon: { type: String },
  area: { type: String, required: true, trim: true },
  address: { type: String },
  phone: { type: String },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  reviewsCount: { type: Number, default: 0 },
  verified: { type: Boolean, default: false },
  policeVerified: { type: Boolean, default: false },
  experience: { type: Number },
  pricing: { type: Schema.Types.Mixed },
  price: { type: String },
  unit: { type: String },
  availability: { type: String, enum: ['available', 'busy', 'offline'], default: 'available' },
  specialties: [{ type: String }],
  operatingHours: { type: String },
  tags: [{ type: String }],
  plan: { type: String, enum: ['basic', 'featured', 'elite'] },
  applicationStatus: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'approved' },
}, { timestamps: true })

ServiceProviderSchema.index({ area: 1, types: 1 })
ServiceProviderSchema.index({ businessName: 'text', area: 'text' })

export const ServiceProvider = mongoose.models.ServiceProvider || mongoose.model<IServiceProvider>('ServiceProvider', ServiceProviderSchema)
