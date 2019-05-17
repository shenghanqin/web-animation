import React, { Component } from 'react'

import SvgSprite2All from '@components/svg-sprite-2-all'
import styles from './SvgSprite.global.styl'
const cx = require('classnames/bind').bind(styles)


export default class BackTopExample extends Component {



  render() {

    return (
      <div>
        <React.StrictMode>
          <div className={cx('side-by-side')}>
            <svg width="240" height="240"><use xlinkHref="#ui-svg-sprite-2-all-down-circle"/></svg>
            <svg className={cx('svg-sprite-2-story-2')} width="240" height="240"><use xlinkHref="#ui-svg-sprite-2-all-down-circle"/></svg>
          </div>
          <SvgSprite2All></SvgSprite2All>
        </React.StrictMode>
      </div>
    )
  }
}