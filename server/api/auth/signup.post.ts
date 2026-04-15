import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { User } from '../../models/User'

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  password: z.string().min(8).max(128),
  languagePref: z.enum(['en', 'hi']).optional(),
})

export default defineEventHandler(async (event) => {
  await connectDB()

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    throw createError({ statusCode: 400, message: parsed.error.issues[0].message })
  }

  const { name, email, phone, password, languagePref } = parsed.data

  const existing = await User.findOne({ email: email.toLowerCase() })
  if (existing) {
    throw createError({ statusCode: 409, message: 'An account with this email already exists' })
  }

  const passwordHash = await hashPassword(password)

  const user = await User.create({
    name,
    email: email.toLowerCase(),
    phone,
    passwordHash,
    languagePref: languagePref || 'en',
  })

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
