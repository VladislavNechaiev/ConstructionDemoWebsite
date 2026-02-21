import { defineField, defineType } from 'sanity'

export const projectSchema = defineType({
    name: 'project',
    title: 'Project Gallery',
    type: 'document',
    fields: [
        defineField({
            name: 'titleRu',
            title: 'Title (Russian)',
            type: 'string',
        }),
        defineField({
            name: 'titleHe',
            title: 'Title (Hebrew)',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Turnkey', value: 'turnkey' },
                    { title: 'Renovation', value: 'renovation' },
                    { title: 'Design', value: 'design' },
                ],
            },
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
            media: 'image',
        },
    },
})
