import React from 'react'

require(`katex/dist/katex.min.css`)

export const PostContainer = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
)
