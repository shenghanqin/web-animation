import React, { Component } from 'react'

import PlayIconBorder from '@components/play-icon-1-border'
import PlayIconSvg from '@components/play-icon-2-svg'
import PlayIconIqiyi from '@components/play-icon-3-iqiyi'
import PlayIcon4CircleRect from '@components/play-icon-4-circle-rect'

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
              <th style={{ padding: '0 20px' }}><h3>V4 方圆三角形</h3></th>
            </tr>
            <tr>
              <td style={{ padding: '0 20px' }}><PlayIconBorder {...this.props} /></td>
              <td style={{ padding: '0 20px' }}><PlayIconSvg {...this.props} /></td>
              <td style={{ padding: '0 20px' }}><PlayIconIqiyi {...this.props} /></td>
              <td style={{ padding: '0 20px' }}><PlayIcon4CircleRect {...this.props} /></td>
            </tr>
          </table>
        </React.StrictMode>
      </div>
    )
  }
}