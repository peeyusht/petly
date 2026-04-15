import mongoose, { Schema, type Document, type Types } from 'mongoose'

export interface IComment {
  author: Types.ObjectId
  authorName: string
  text: string
  createdAt: Date
}

export interface ICommunityPost extends Document {
  author: Types.ObjectId
  authorName: string
  authorAvatar?: string
  type: 'general' | 'lost_pet' | 'adoption' | 'alert'
  text: string
  image?: string
  area?: string
  likes: Types.ObjectId[]
  likesCount: number
  comments: IComment[]
  commentsCount: number
  createdAt: Date
  updatedAt: Date
}

const CommentSchema = new Schema<IComment>({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  authorName: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const CommunityPostSchema = new Schema<ICommunityPost>({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  authorName: { type: String, required: true },
  authorAvatar: { type: String },
  type: { type: String, enum: ['general', 'lost_pet', 'adoption', 'alert'], default: 'general' },
  text: { type: String, required: true },
  image: { type: String },
  area: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  likesCount: { type: Number, default: 0 },
  comments: [CommentSchema],
  commentsCount: { type: Number, default: 0 },
}, { timestamps: true })

CommunityPostSchema.index({ area: 1, createdAt: -1 })

export const CommunityPost = mongoose.models.CommunityPost || mongoose.model<ICommunityPost>('CommunityPost', CommunityPostSchema)
