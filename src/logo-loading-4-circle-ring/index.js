// cc 机器人的loading图标
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const prefixClass = `${PREFIX}-cclogo-loading-4-circle-ring`


const SKIN = {
  blue: '#2F5AFF',
  white: '#fff'
}



export default class LogoLoading extends Component {

  render() {
    let { skin, style } = this.props
    let iconColor = SKIN[skin] || skin
    // M50 300 A290,290, 0,1,1, 50.000001858166243,300.02129301676624
    return (
      <div className={cx(`${prefixClass}`)} style={style}>
        <svg className={cx(`${prefixClass}-svg`)} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
          <mask id={`${prefixClass}-mask`}>
            <circle cx="300" cy="300" r="300" fill="white" />
            <rect x="0" y="277" width="600" height="46" fill="black" />
          </mask>
          <g className={cx(`${prefixClass}-group`)}>
            <circle className={cx(`${prefixClass}-ring`)} cx="260" cy="300" r="290" fill="none" strokeWidth="100" stroke={iconColor} mask={`url(#${prefixClass}-mask)`}></circle>
          </g>
          <path className={cx(`${prefixClass}-eye`)} fill={iconColor} strokeWidth="10" stroke={iconColor} d="m284.953401,235.766159c5.846281,0.593821 9.835216,4.081812 13.935874,10.631933c3.541999,6.550121 12.249936,40.581733 12.249936,45.911953c0,4.609919 0.273424,10.811982 -7.87674,13.316978c-8.150165,2.504997 -9.513894,-2.046528 -13.460886,-7.996739c-1.973496,-2.975105 -7.161079,-43.380094 -11.683162,-46.374901c-1.170128,-8.860729 3.911837,-15.786135 6.834978,-15.489224z" />
          <path className={cx(`${prefixClass}-eye`)} fill={iconColor} strokeWidth="10" stroke={iconColor} d="m434.649354,199.48547c5.846281,0.593821 9.835216,4.081812 13.935874,10.631933c3.541999,6.550121 12.249936,40.581733 12.249936,45.911953c0,4.609919 0.273424,10.811982 -7.87674,13.316978c-8.150165,2.504997 -9.513894,-2.046528 -13.460886,-7.996739c-1.973496,-2.975105 -7.161079,-43.380094 -11.683162,-46.374901c-1.170128,-8.860729 3.911837,-15.786135 6.834978,-15.489224z" />
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