import { connectDB } from '../../utils/db'
import { ServiceProvider } from '../../models/ServiceProvider'

export default defineEventHandler(async (event) => {
  await connectDB()
  const query = getQuery(event)
  const filter: Record<string, any> = { applicationStatus: 'approved' }

  if (query.type && query.type !== 'all') {
    filter.types = query.type
  }
  if (query.area) {
    filter.area = { $regex: query.area, $options: 'i' }
  }
  if (query.q) {
    filter.$or = [
      { businessName: { $regex: query.q, $options: 'i' } },
      { area: { $regex: query.q, $options: 'i' } },
      { description: { $regex: query.q, $options: 'i' } },
    ]
  }

  return await ServiceProvider.find(filter).sort({ rating: -1, reviewsCount: -1 }).limit(50)
})
