import { connectDB } from '../utils/db'

export default defineNitroPlugin(async () => {
  try {
    await connectDB()
    console.log('[Petly] MongoDB connected')
  } catch (e: any) {
    console.warn('[Petly] MongoDB not connected:', e.message || 'No URI configured')
  }
})
