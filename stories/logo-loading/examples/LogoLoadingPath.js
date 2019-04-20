import React, { Component } from 'react'

import LogoLoadingPath from '@components/logo-loading-path'

export default class BackTopExample extends Component {

  render() {
    return (
      <div>
        <React.StrictMode>
          <LogoLoadingPath {...this.props} />
        </React.StrictMode>
      </div>
    )
  }
}