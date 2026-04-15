import { connectDB } from '../../utils/db'
import { CommunityPost } from '../../models/CommunityPost'

export default defineEventHandler(async (event) => {
  await connectDB()
  const query = getQuery(event)
  const filter: Record<string, any> = {}

  if (query.area) {
    filter.area = { $regex: query.area, $options: 'i' }
  }

  const page = parseInt(query.page as string) || 1
  const limit = Math.min(parseInt(query.limit as string) || 20, 50)
  const skip = (page - 1) * limit

  return await CommunityPost.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
})
