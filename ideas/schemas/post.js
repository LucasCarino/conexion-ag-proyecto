export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitulo',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Url',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categoría',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Texto',
      type: 'blockContent',
    },
  ],
  orderings: [
    {
      title: 'Fecha de publicación, New',
      name: 'fechaDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Fecha de publicación, Old',
      name: 'fechaAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
