import { defineField, defineType } from 'sanity'

export const faqSchema = defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'questionRu',
            title: 'Question (Russian)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'questionHe',
            title: 'Question (Hebrew)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'answerRu',
            title: 'Answer (Russian)',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'answerHe',
            title: 'Answer (Hebrew)',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
    preview: {
        select: {
            title: 'questionRu',
        },
    },
})
