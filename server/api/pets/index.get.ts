import { connectDB } from '../../utils/db'
import { Pet } from '../../models/Pet'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()
  return await Pet.find({ owner: session.user.id }).sort({ createdAt: -1 })
})
