import React, { Component } from 'react'

import SvgSprite2All from '@components/svg-sprite-2-all'
import styles from './SvgSprite.global.styl'
const cx = require('classnames/bind').bind(styles)


export default class BackTopExample extends Component {



  render() {

    return (
      <div>
        <React.StrictMode>
          <SvgSprite2All></SvgSprite2All>
          <svg width="12" height="12"><use xlinkHref="#ui-svg-sprite-2-all-down-circle"/></svg>
        </React.StrictMode>
      </div>
    )
  }
}