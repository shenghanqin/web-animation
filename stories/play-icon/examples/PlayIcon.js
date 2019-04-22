import React, { Component } from 'react'

import PlayIconBorder from '@components/play-icon-1-border'

export default class BackTopExample extends Component {

  render() {
    return (
      <div>
        <React.StrictMode>
          <PlayIconBorder {...this.props} />
        </React.StrictMode>
      </div>
    )
  }
}