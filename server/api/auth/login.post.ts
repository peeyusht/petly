import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { User } from '../../models/User'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export default defineEventHandler(async (event) => {
  await connectDB()

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    throw createError({ statusCode: 400, message: 'Invalid email or password' })
  }

  const { email, password } = parsed.data

  const user = await User.findOne({ email: email.toLowerCase() })
  if (!user) {
    throw createError({ statusCode: 401, message: 'Invalid email or password' })
  }

  const valid = await verifyPassword(user.passwordHash, password)
  if (!valid) {
    throw createError({ statusCode: 401, message: 'Invalid email or password' })
  }

  await setUserSession(event, {
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    },
  })

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  }
})
