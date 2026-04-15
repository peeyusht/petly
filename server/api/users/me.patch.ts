import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { User } from '../../models/User'

const schema = z.object({
  name: z.string().min(1).max(100).optional(),
  phone: z.string().optional(),
  area: z.string().optional(),
  languagePref: z.enum(['en', 'hi']).optional(),
  avatar: z.string().url().optional(),
})

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) throw createError({ statusCode: 400, message: parsed.error.issues[0].message })

  const user = await User.findByIdAndUpdate(session.user.id, parsed.data, { new: true }).select('-passwordHash')
  if (!user) throw createError({ statusCode: 404, message: 'User not found' })

  return user
})
