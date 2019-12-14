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
  if (location.href) {
    const strArr = location.href.split('/')
    var cnt = 0
    var postPath = '/'
    for (var i in strArr) {
      cnt = cnt + 1
      if (i >= 3) {
        if (strArr[i][0] == '#') break
        postPath += strArr[i] + '/'
      }
    }
  }
  return (
    <React.Fragment>
      <Top title={title} location={location} rootPath={rootPath} />
      <div className="table_of_contents">
        <ul className="table_of_contents-list">
          {headings &&
            headings.map(header => (
              <li className="table_of_contents-list-item" key={header.value} style={{ paddingLeft: `${header.depth - 1}rem` }}>
                <Link to={`${postPath}#${encodeURI(kebabCase(header.value))}`} className="table_of_contents-list-item-link">
                  {header.value}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <TableOfContents headings={headings} />
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
