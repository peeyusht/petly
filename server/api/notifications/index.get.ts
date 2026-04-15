import { connectDB } from '../../utils/db'
import { Notification } from '../../models/Notification'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()

  return await Notification.find({ user: session.user.id })
    .sort({ createdAt: -1 })
    .limit(50)
})
