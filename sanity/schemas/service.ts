import { defineField, defineType } from 'sanity'

export const serviceSchema = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'titleRu',
            title: 'Title (Russian)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'titleHe',
            title: 'Title (Hebrew)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'descriptionRu',
            title: 'Description (Russian)',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'descriptionHe',
            title: 'Description (Hebrew)',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name (Lucide)',
            type: 'string',
            description: 'e.g., Home, Ruler, Droplet, Zap, Hammer',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
    preview: {
        select: {
            title: 'titleRu',
            subtitle: 'titleHe',
        },
    },
})
