import React, { Component } from 'react'

import CssVar1Rating from '@components/css-var-1-rating'


export default class BackTopExample extends Component {

  render() {
    return (
      <div>
        <React.StrictMode>
          <CssVar1Rating></CssVar1Rating>
        </React.StrictMode>
      </div>
    )
  }
}