import mongoose, { Schema, type Document, type Types } from 'mongoose'

export interface INotification extends Document {
  user: Types.ObjectId
  title: string
  message: string
  icon?: string
  type: 'booking' | 'vaccination' | 'community' | 'system'
  read: boolean
  link?: string
  createdAt: Date
  updatedAt: Date
}

const NotificationSchema = new Schema<INotification>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  icon: { type: String },
  type: { type: String, enum: ['booking', 'vaccination', 'community', 'system'], default: 'system' },
  read: { type: Boolean, default: false },
  link: { type: String },
}, { timestamps: true })

NotificationSchema.index({ user: 1, read: 1, createdAt: -1 })

export const Notification = mongoose.models.Notification || mongoose.model<INotification>('Notification', NotificationSchema)
