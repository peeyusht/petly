import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { Vaccination } from '../../models/Vaccination'
import { Pet } from '../../models/Pet'

const schema = z.object({
  pet: z.string().min(1),
  name: z.string().min(1).max(100),
  date: z.string().min(1),
  status: z.enum(['done', 'scheduled', 'upcoming']).optional(),
  vetName: z.string().optional(),
  notes: z.string().optional(),
})

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) throw createError({ statusCode: 400, message: parsed.error.issues[0].message })

  // Verify pet ownership
  const pet = await Pet.findOne({ _id: parsed.data.pet, owner: session.user.id })
  if (!pet) throw createError({ statusCode: 404, message: 'Pet not found' })

  const vaccination = await Vaccination.create({
    ...parsed.data,
    date: new Date(parsed.data.date),
  })
  return vaccination
})
