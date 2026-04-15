import { connectDB } from '../../utils/db'
import { ServiceProvider } from '../../models/ServiceProvider'

export default defineEventHandler(async (event) => {
  await connectDB()
  const query = getQuery(event)
  const area = (query.area as string) || ''

  const filter: Record<string, any> = { applicationStatus: 'approved' }
  if (area) {
    filter.area = { $regex: area, $options: 'i' }
  }

  return await ServiceProvider.find(filter).sort({ rating: -1 }).limit(20)
})
