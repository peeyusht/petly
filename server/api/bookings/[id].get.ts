import { connectDB } from '../../utils/db'
import { Booking } from '../../models/Booking'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()
  const id = getRouterParam(event, 'id')

  const booking = await Booking.findOne({ _id: id, user: session.user.id })
    .populate('provider', 'businessName icon area phone')
    .populate('pet', 'name breed')
  if (!booking) throw createError({ statusCode: 404, message: 'Booking not found' })
  return booking
})
