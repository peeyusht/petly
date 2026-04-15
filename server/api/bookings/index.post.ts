import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { Booking } from '../../models/Booking'
import { Notification } from '../../models/Notification'

const schema = z.object({
  provider: z.string().min(1),
  pet: z.string().optional(),
  serviceType: z.string().min(1),
  date: z.string().min(1),
  timeSlot: z.string().min(1),
  package: z.enum(['Basic', 'Standard', 'Premium']).optional(),
  price: z.number().min(0),
  notes: z.string().optional(),
})

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) throw createError({ statusCode: 400, message: parsed.error.issues[0].message })

  const booking = await Booking.create({
    ...parsed.data,
    user: session.user.id,
    date: new Date(parsed.data.date),
    status: 'confirmed',
  })

  // Create notification
  await Notification.create({
    user: session.user.id,
    title: 'Booking Confirmed',
    message: `Your booking for ${parsed.data.timeSlot} on ${parsed.data.date} is confirmed.`,
    icon: '📅',
    type: 'booking',
  })

  return booking
})
