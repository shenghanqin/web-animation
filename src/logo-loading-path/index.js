// cc 机器人的loading图标
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const prefixClass = `${PREFIX}-cclogo-loading`


export default class LogoLoading extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { skin, style } = this.props
    // M0,300 A300,300, 0,0,1, 600,300
    // M600,300 A300,300, 0,0,1, 0,0
    return (
      <div className={cx(`${prefixClass}`, { [`${prefixClass}-white`]: skin !== 'blue' })} style={style}>
        <div className={cx(`${prefixClass}-icon`)}>
          <div className={cx(`${prefixClass}-scroll-icon`)}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
              <mask id={`${prefixClass}-mask`}>
                <circle cx="300" cy="300" r="300" fill="white" />
                <rect x="0" y="277" width="600" height="46" fill="black" />
              </mask>
              <g className={cx(`${prefixClass}-ring ${prefixClass}-ring-1`)} mask={`url(#${prefixClass}-mask)`}>
                <path fill="none" stroke="#008CED" d="M50,300 A290,290, 0,0,1, 630,300" strokeWidth="120" />
                <path fill="none" stroke="#008CED" d="M50,300 A290,290, 0,0,0, 630,300" strokeWidth="120" />
              </g>
              <path className={cx(`${prefixClass}-eye`)} d="M279.185,251.568s-.647-25.358,15.574-7.6,13.709,44.548,11.418,52.7-10.629,11.759-17.006,4.378C291.83,277.634,279.185,251.568,279.185,251.568Z" fill="#008bec" />
              <path className={cx(`${prefixClass}-eye`)} d="M429.185,221.568s-.647-25.358,15.574-7.6,13.709,44.548,11.418,52.7-10.629,11.759-17.006,4.378C441.83,247.634,429.185,221.568,429.185,221.568Z" fill="#008bec" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

LogoLoading.propTypes = {
  /**
   * loading样式，有白色和蓝色两种
   */
  skin: PropTypes.string,
  /**
   * 覆写样式
   */
  style: PropTypes.object,
}

LogoLoading.defaultProps = {
  skin: 'blue',
  style: {}
}