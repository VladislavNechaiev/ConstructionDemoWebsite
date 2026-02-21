import { groq } from 'next-sanity'
import { client } from './client'

export const getServices = async () => {
    return client.fetch(
        groq`*[_type == "service"] | order(order asc) {
      _id,
      titleRu,
      titleHe,
      descriptionRu,
      descriptionHe,
      icon,
      order
    }`
    )
}

export const getProjects = async () => {
    return client.fetch(
        groq`*[_type == "project"] | order(order asc) {
      _id,
      titleRu,
      titleHe,
      "imageUrl": image.asset->url,
      category,
      order
    }`
    )
}

export const getFaqs = async () => {
    return client.fetch(
        groq`*[_type == "faq"] | order(order asc) {
      _id,
      questionRu,
      questionHe,
      answerRu,
      answerHe,
      order
    }`
    )
}
