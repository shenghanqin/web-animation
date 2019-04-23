

// export default 

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../CodeBlock'
require('./styles.css')
// require('github-markdown-css/github-markdown.css')

export default class Markdown extends Component {
  render() {
    const { source = '' } = this.props
    return (
      <div className='markdown-body'>
        <ReactMarkdown
          source={source}
          renderers={{
            code: CodeBlock
          }}
        />
      </div>
    )
  }
}
