import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { Booking } from '../../models/Booking'

const schema = z.object({
  status: z.enum(['pending', 'confirmed', 'completed', 'cancelled']),
})

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()
  const id = getRouterParam(event, 'id')

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) throw createError({ statusCode: 400, message: parsed.error.issues[0].message })

  const booking = await Booking.findOneAndUpdate(
    { _id: id, user: session.user.id },
    { status: parsed.data.status },
    { new: true }
  )
  if (!booking) throw createError({ statusCode: 404, message: 'Booking not found' })
  return booking
})
