import mongoose from 'mongoose'

interface CachedConnection {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  var __mongoose: CachedConnection | undefined
}

const cached: CachedConnection = global.__mongoose || { conn: null, promise: null }
if (!global.__mongoose) global.__mongoose = cached

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    const config = useRuntimeConfig()
    const uri = config.mongodbUri

    if (!uri) {
      console.warn('[Petly] MONGODB_URI not set — running without database')
      throw createError({ statusCode: 500, message: 'Database not configured' })
    }

    cached.promise = mongoose.connect(uri, {
      bufferCommands: false,
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}
