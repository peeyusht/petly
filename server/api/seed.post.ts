import { connectDB } from '../utils/db'
import { ServiceProvider } from '../models/ServiceProvider'
import { CommunityPost } from '../models/CommunityPost'

const seedProviders = [
  { businessName: 'Suraj Dog Walker', types: ['walking'], icon: '🐕', area: 'Gaur City', phone: '+91 98765 43210', rating: 5.0, reviewsCount: 12, experience: 3, price: '₹249', unit: 'per walk', verified: true, policeVerified: true, applicationStatus: 'approved' },
  { businessName: 'Bonzee Pet Home Boarding', types: ['boarding'], icon: '🏠', area: 'Sector 16', phone: '+91 98765 11111', rating: 5.0, reviewsCount: 28, experience: 4, price: '₹499', unit: 'per night', verified: true, policeVerified: false, applicationStatus: 'approved' },
  { businessName: 'Furry Home', types: ['boarding'], icon: '🐾', area: 'Omega II', phone: '+91 98765 22222', rating: 4.9, reviewsCount: 61, experience: 5, price: '₹449', unit: 'per night', verified: true, policeVerified: false, applicationStatus: 'approved' },
  { businessName: 'Pets Paradise', types: ['grooming'], icon: '✂️', area: 'Bisrakh', phone: '+91 98765 33333', rating: 4.9, reviewsCount: 93, experience: 5, price: '₹499', unit: 'per session', verified: true, policeVerified: false, applicationStatus: 'approved' },
  { businessName: 'Dog Walk & Training Studio', types: ['walking', 'training'], icon: '🎓', area: 'Alpha 1', phone: '+91 98765 44444', rating: 4.9, reviewsCount: 45, experience: 4, price: '₹349', unit: 'per walk', verified: true, policeVerified: false, applicationStatus: 'approved' },
  { businessName: 'R K Pet Shop', types: ['stores'], icon: '🛒', area: 'Sector 1', phone: '+91 99995 18821', rating: 4.5, reviewsCount: 324, operatingHours: '10am–10pm', tags: ['Food', 'Accessories', 'Toys', 'Medicine'], verified: true, policeVerified: false, applicationStatus: 'approved' },
  { businessName: 'Greater Noida Pet Shop', types: ['stores'], icon: '🛒', area: 'Omicron III', phone: '+91 93198 64441', rating: 5.0, reviewsCount: 9, operatingHours: 'Open 24hrs', tags: ['Dogs', 'Cats', 'Birds', 'Food', 'Medicine'], verified: true, policeVerified: false, applicationStatus: 'approved' },
  { businessName: 'Dr. Sharma Vet Clinic', types: ['vets'], icon: '🩺', area: 'Sector 4', phone: '+91 98110 12345', rating: 4.7, reviewsCount: 89, experience: 8, price: '₹300', unit: 'consult', operatingHours: 'Mon–Sat 9am–7pm', specialties: ['Dogs', 'Cats', 'Birds', 'Surgery', 'Vaccination'], verified: true, policeVerified: false, applicationStatus: 'approved' },
  { businessName: 'PetCare Animal Hospital', types: ['vets'], icon: '🏥', area: 'Sector 12', phone: '+91 98765 43210', rating: 4.5, reviewsCount: 156, experience: 12, price: '₹400', unit: 'consult', operatingHours: 'Mon–Sun 8am–9pm', specialties: ['All Animals', 'Emergency', 'ICU', 'Dental'], verified: true, policeVerified: false, applicationStatus: 'approved' },
]

const seedPosts = [
  { authorName: 'Priya M.', authorAvatar: '🧑', type: 'general', area: 'Gaur City', text: 'Anyone know a good groomer near Gaur City who handles anxious dogs? Bruno gets really nervous during baths. 🐕💧', likesCount: 8, commentsCount: 3 },
  { authorName: 'Rahul K.', authorAvatar: '👨', type: 'general', area: 'Sector 16', text: 'Just adopted a beautiful indie puppy from the shelter! Looking for vaccination recommendations for puppies. Any vet suggestions?', likesCount: 24, commentsCount: 7 },
  { authorName: 'Neha S.', authorAvatar: '👩', type: 'alert', area: 'Omega II', text: 'Warning: Stray dogs near Omega II park are becoming aggressive in the evening. Please be careful while walking your pets! 🚨', likesCount: 45, commentsCount: 12 },
]

export default defineEventHandler(async (event) => {
  // Only allow in development
  if (process.env.NODE_ENV === 'production') {
    throw createError({ statusCode: 403, message: 'Seed not allowed in production' })
  }

  await connectDB()

  // Clear existing data
  await ServiceProvider.deleteMany({})
  await CommunityPost.deleteMany({})

  // Insert seed data
  const providers = await ServiceProvider.insertMany(seedProviders)
  const posts = await CommunityPost.insertMany(seedPosts)

  return {
    success: true,
    seeded: {
      providers: providers.length,
      communityPosts: posts.length,
    },
  }
})
