import React from 'react'
import { addParameters, configure, addDecorator } from '@storybook/react'
import { addReadme, configureReadme } from 'storybook-readme-customize'

// 加载stories
function loadStories() {
  const req = require.context('../stories', true, /\.story\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

// 配置readme
addDecorator(addReadme)
configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  StoryPreview: ({ children }) => {
    return (
      <div style={{ margin: '20px 0px' }}>{children}</div>
    )
  },

  /**
   * Wrapper for content and sidebar docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  DocPreview: ({ children }) => (
    <div>{children}</div>
  )
})