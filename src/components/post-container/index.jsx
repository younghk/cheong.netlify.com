import React from 'react'

require(`katex/dist/katex.min.css`)

export const PostContainer = ({ html }) => (
  <div className="post-single__body" dangerouslySetInnerHTML={{ __html: html }} />
)
