// cc 机器人的loading图标
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const prefixClass = `${PREFIX}-cclogo-loading-path-circle`


const SKIN = {
  blue: '#2F5AFF',
  white: '#fff'
}



export default class LogoLoading extends Component {

  render() {
    let { skin, style } = this.props
    let iconColor = SKIN[skin] || skin
    return (
      <div className={cx(`${prefixClass}`)} style={style}>
        <svg className={cx(`${prefixClass}-svg`)} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
          <mask id={`${prefixClass}-mask`}>
            <circle cx="300" cy="300" r="300" fill="white" />
            <rect x="0" y="277" width="600" height="46" fill="black" />
          </mask>
          <path className={cx(`${prefixClass}-ring`)} fill="none" stroke={iconColor} d="M50 300 A290,290, 0,1,1, 50.000001858166243,300.02129301676624" strokeWidth="100" mask={`url(#${prefixClass}-mask)`} />
          <path className={cx(`${prefixClass}-eye`)} d="M279.185,251.568s-.647-25.358,15.574-7.6,13.709,44.548,11.418,52.7-10.629,11.759-17.006,4.378C291.83,277.634,279.185,251.568,279.185,251.568Z" fill={iconColor} />
          <path className={cx(`${prefixClass}-eye`)} d="M429.185,221.568s-.647-25.358,15.574-7.6,13.709,44.548,11.418,52.7-10.629,11.759-17.006,4.378C441.83,247.634,429.185,221.568,429.185,221.568Z" fill={iconColor} />
        </svg>
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