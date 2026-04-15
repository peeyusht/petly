import { connectDB } from '../../utils/db'
import { User } from '../../models/User'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()

  const user = await User.findById(session.user.id).select('-passwordHash')
  if (!user) throw createError({ statusCode: 404, message: 'User not found' })

  return user
})
