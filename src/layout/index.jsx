import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'

import { Link } from 'gatsby'
import TableOfContents from '../components/toc'
import kebabCase from 'lodash/kebabCase'

import './index.scss'

require(`katex/dist/katex.min.css`)

export const Layout = ({ location, title, headings, path, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <Top title={title} location={location} rootPath={rootPath} />

      <TableOfContents location={location} headings={headings} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <ThemeSwitch />
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
