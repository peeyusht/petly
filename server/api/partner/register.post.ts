import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { ServiceProvider } from '../../models/ServiceProvider'
import { User } from '../../models/User'

const schema = z.object({
  businessName: z.string().min(1).max(100),
  types: z.array(z.string()).min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  area: z.string().min(1),
  experience: z.number().min(0).optional(),
  plan: z.enum(['basic', 'featured', 'elite']).optional(),
})

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) throw createError({ statusCode: 400, message: parsed.error.issues[0].message })

  // Update user role to partner
  await User.findByIdAndUpdate(session.user.id, { role: 'partner' })

  const provider = await ServiceProvider.create({
    ...parsed.data,
    user: session.user.id,
    applicationStatus: 'pending',
    verified: false,
    rating: 0,
    reviewsCount: 0,
  })

  return { success: true, providerId: provider._id, status: 'pending' }
})
