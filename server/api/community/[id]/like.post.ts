import { connectDB } from '../../../utils/db'
import { CommunityPost } from '../../../models/CommunityPost'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  await connectDB()
  const id = getRouterParam(event, 'id')

  const post = await CommunityPost.findById(id)
  if (!post) throw createError({ statusCode: 404, message: 'Post not found' })

  const userId = session.user.id
  const alreadyLiked = post.likes.some((l: any) => l.toString() === userId)

  if (alreadyLiked) {
    post.likes = post.likes.filter((l: any) => l.toString() !== userId)
    post.likesCount = Math.max(0, post.likesCount - 1)
  } else {
    post.likes.push(userId as any)
    post.likesCount += 1
  }

  await post.save()
  return { liked: !alreadyLiked, likesCount: post.likesCount }
})
