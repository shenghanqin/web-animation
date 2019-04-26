import React, { Component } from 'react'

import Loading1 from '@components/loading-1-preloader-square-circle'

export default class BackTopExample extends Component {

  render() {
    return (
      <div>
        <React.StrictMode>

          <table>
            <tr>
              <th style={{ padding: '0 20px' }}><h3>V1 CSS border</h3></th>
              <th style={{ padding: '0 20px' }}><h3>V2 SVG path</h3></th>
              <th style={{ padding: '0 20px' }}><h3>V3 iqiyi path</h3></th>
            </tr>
            <tr>
              <td style={{ padding: '0 20px' }}><Loading1 {...this.props} /></td>
            </tr>
          </table>
        </React.StrictMode>
      </div>
    )
  }
}