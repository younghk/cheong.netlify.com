import React from 'react'
import throttle from 'lodash/throttle'
import kebabCase from 'lodash/kebabCase'

class TableOfContents extends React.Component {
    HeaderManager = {
        tocHeader: [],
        postHeader: [],
        setPostHeaderId() {
            const headers = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6')
            if (!headers) {
                return
            }
            headers.forEach(header => {
                const id = encodeURI(kebabCase(header.innerText))
                header.setAttribute('id', id)
            })
            this._getHeaders()
            this.setActiveHeader(0)
        },

        _getHeaders() {
            const toc = document.body.querySelectorAll('.__table_of_contents-list-item')
            const headers = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6')
            this.tocHeader = toc
            this.postHeader = headers
        },
        setActiveHeader(index) {
            if (!this.tocHeader.length) {
                return
            }

            const prev_active_header = document.body.querySelector('.active')
            if (prev_active_header) {
                prev_active_header.classList.remove('active')
            }

            this.tocHeader[index].classList.add('active')
        }
    }

    componentDidMout() {
        this.HeaderManager.setPostHeaderId()
    }

    componentWillUnmount() {
        this.unregisterEvent()
    }

    onScroll = throttle(() => {
        const scrollTop = this.getScrollTop()
        Array.from(this.HeaderManager.postHeader).forEach((header, index) => {
            if (scrollTop >= header.offsetTop) {
                this.HeaderManager.setActiveHeader(index)
            }
        })
        if (scrollTop === 0) {
            this.HeaderManager.setActiveHeader(0)
        }
    }, 250)

    getScrollTop = () => {
        if (!document.body) return 0
        const scrollTop = document.documentElement
            ? document.documentElement.scrollTop || document.body.scrollTop
            : document.body.scrollTop
        return scrollTop
    }

    registerEvent = () => {
        window.addEventListener('scroll', this.onScroll)
    }

    unregisterEvent = () => {
        window.removeEventListener('scroll', this.onScroll)
    }

    render() {
        const tableOfContents = (
            <ul className="__table_of_contents-list">
                {post &&
                    post.headings.map(header => (
                        <li className="__table_of_contents-list-item" key={header.value} style={{ paddingLeft: `${header.depth - 1}rem` }}>
                            <Link to={`${path}#${encodeURI(kebabCase(header.value))}`} className="post-single__table_of_contents-list-item-link">
                                {header.value}
                            </Link>
                        </li>
                    ))}
            </ul>
        )
        return (
            <div className="__table_of_contents">
                {tableOfContents}
            </div>
        )
    }
}

export default TableOfContents