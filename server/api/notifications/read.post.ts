import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { Notification } from '../../models/Notification'

const schema = z.object({
  ids: z.array(z.string()).min(1),
})

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) throw createError({ statusCode: 400, message: parsed.error.issues[0].message })

  await Notification.updateMany(
    { _id: { $in: parsed.data.ids }, user: session.user.id },
    { read: true }
  )

  return { success: true }
})
