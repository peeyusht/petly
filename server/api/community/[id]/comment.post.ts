import { z } from 'zod'
import { connectDB } from '../../../utils/db'
import { CommunityPost } from '../../../models/CommunityPost'

const schema = z.object({
  text: z.string().min(1).max(1000),
})

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()
  const id = getRouterParam(event, 'id')

  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) throw createError({ statusCode: 400, message: parsed.error.issues[0].message })

  const post = await CommunityPost.findById(id)
  if (!post) throw createError({ statusCode: 404, message: 'Post not found' })

  post.comments.push({
    author: session.user.id as any,
    authorName: session.user.name,
    text: parsed.data.text,
    createdAt: new Date(),
  })
  post.commentsCount += 1
  await post.save()

  return { commentsCount: post.commentsCount, comment: post.comments[post.comments.length - 1] }
})
