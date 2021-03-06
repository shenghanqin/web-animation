import React, { Component } from 'react'

import SvgSprite2All from '@components/svg-sprite-2-all'
import SvgSprite1Icon from '@components/svg-sprite-1-icon'
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
          <div className={cx('side-by-side')}>
            <svg width="240" height="240"><use xlinkHref="#src-svg-sprite-down-"/></svg>
            <svg className={cx('svg-sprite-2-story-2')} width="240" height="240" style={{ color: 'red' }}><use xlinkHref="#src-svg-sprite-down-"/></svg>
          </div>
          <div className={cx('svg-sprite-2-story-down')}></div>
          <SvgSprite2All></SvgSprite2All>
          <SvgSprite1Icon></SvgSprite1Icon>
        </React.StrictMode>
      </div>
    )
  }
}