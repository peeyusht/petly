import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { Pet } from '../../models/Pet'

const schema = z.object({
  name: z.string().min(1).max(50).optional(),
  species: z.enum(['dog', 'cat', 'bird', 'rabbit', 'other']).optional(),
  breed: z.string().max(50).optional(),
  age: z.number().min(0).max(360).optional(),
  weight: z.number().min(0).max(200).optional(),
  gender: z.enum(['male', 'female']).optional(),
  photo: z.string().url().optional(),
})

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()
  const id = getRouterParam(event, 'id')

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) throw createError({ statusCode: 400, message: parsed.error.issues[0].message })

  const pet = await Pet.findOneAndUpdate({ _id: id, owner: session.user.id }, parsed.data, { new: true })
  if (!pet) throw createError({ statusCode: 404, message: 'Pet not found' })
  return pet
})
