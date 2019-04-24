import React, { Component } from 'react'

import PlayIconBorder from '@components/play-icon-1-border'
import PlayIconSvg from '@components/play-icon-2-svg'

export default class BackTopExample extends Component {

  render() {
    return (
      <div>
        <React.StrictMode>
          <table>
            <tr>
              <th style={{ padding: '0 20px' }}><h3>V1 CSS border</h3></th>
              <th style={{ padding: '0 20px' }}><h3>V2 SVG path</h3></th>
            </tr>
            <tr>
              <td style={{ padding: '0 20px' }}><PlayIconBorder {...this.props} /></td>
              <td style={{ padding: '0 20px' }}><PlayIconSvg {...this.props} /></td>
            </tr>
          </table>
        </React.StrictMode>
      </div>
    )
  }
}