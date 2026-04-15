import mongoose, { Schema, type Document, type Types } from 'mongoose'

export interface IVaccination extends Document {
  pet: Types.ObjectId
  name: string
  date: Date
  status: 'done' | 'scheduled' | 'upcoming'
  vetName?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const VaccinationSchema = new Schema<IVaccination>({
  pet: { type: Schema.Types.ObjectId, ref: 'Pet', required: true, index: true },
  name: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['done', 'scheduled', 'upcoming'], default: 'upcoming' },
  vetName: { type: String },
  notes: { type: String },
}, { timestamps: true })

export const Vaccination = mongoose.models.Vaccination || mongoose.model<IVaccination>('Vaccination', VaccinationSchema)
