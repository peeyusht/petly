import { connectDB } from '../../utils/db'
import { Booking } from '../../models/Booking'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()

  return await Booking.find({ user: session.user.id })
    .populate('provider', 'businessName icon area')
    .populate('pet', 'name breed')
    .sort({ date: -1 })
})
