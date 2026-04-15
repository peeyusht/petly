import { connectDB } from '../../utils/db'
import { Vaccination } from '../../models/Vaccination'
import { Pet } from '../../models/Pet'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()
  const query = getQuery(event)
  const petId = query.petId as string

  if (!petId) throw createError({ statusCode: 400, message: 'petId is required' })

  // Verify pet ownership
  const pet = await Pet.findOne({ _id: petId, owner: session.user.id })
  if (!pet) throw createError({ statusCode: 404, message: 'Pet not found' })

  return await Vaccination.find({ pet: petId }).sort({ date: 1 })
})
