import { type SchemaTypeDefinition } from 'sanity'
import { serviceSchema } from './schemas/service'
import { projectSchema } from './schemas/project'
import { faqSchema } from './schemas/faq'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [serviceSchema, projectSchema, faqSchema],
}
