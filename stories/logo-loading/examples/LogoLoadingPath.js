import React, { Component } from 'react'

import LogoLoadingRotate from '@components/logo-loading-1-rotate'
import LogoLoadingPath from '@components/logo-loading-2-path'
import LogoLoadingEye from '@components/logo-loading-3-path-eye'
import LogoLoadingRing from '@components/logo-loading-4-circle-ring'

export default class BackTopExample extends Component {

  render() {
    return (
      <div>
        <React.StrictMode>
          <table>
            <tr>
              <th style={{ padding: '0 20px' }}><h3>V1 旋转动画</h3></th>
              <th style={{ padding: '0 20px' }}><h3>V2 圆圈轨迹动画</h3></th>
              <th style={{ padding: '0 20px' }}><h3>V3 圆圈加眼睛动画</h3></th>
              <th style={{ padding: '0 20px' }}><h3>V4 简化动画</h3></th>
            </tr>
            <tr>
              <td><LogoLoadingRotate {...this.props} /></td>
              <td><LogoLoadingPath {...this.props} /></td>
              <td><LogoLoadingEye {...this.props} /></td>
              <td><LogoLoadingRing {...this.props} /></td>
            </tr>
          </table>
        </React.StrictMode>
      </div>
    )
  }
}