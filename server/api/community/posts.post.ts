import { z } from 'zod'
import { connectDB } from '../../utils/db'
import { CommunityPost } from '../../models/CommunityPost'

const schema = z.object({
  text: z.string().min(1).max(2000),
  type: z.enum(['general', 'lost_pet', 'adoption', 'alert']).optional(),
  area: z.string().optional(),
  image: z.string().url().optional(),
})

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) throw createError({ statusCode: 400, message: parsed.error.issues[0].message })

  const post = await CommunityPost.create({
    ...parsed.data,
    author: session.user.id,
    authorName: session.user.name,
  })
  return post
})
