import { connectDB } from '../../utils/db'
import { Pet } from '../../models/Pet'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()
  const id = getRouterParam(event, 'id')

  const pet = await Pet.findOneAndDelete({ _id: id, owner: session.user.id })
  if (!pet) throw createError({ statusCode: 404, message: 'Pet not found' })
  return { success: true }
})
