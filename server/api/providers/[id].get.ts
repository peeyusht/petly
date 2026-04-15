import { connectDB } from '../../utils/db'
import { ServiceProvider } from '../../models/ServiceProvider'

export default defineEventHandler(async (event) => {
  await connectDB()
  const id = getRouterParam(event, 'id')

  const provider = await ServiceProvider.findById(id)
  if (!provider) throw createError({ statusCode: 404, message: 'Provider not found' })
  return provider
})
