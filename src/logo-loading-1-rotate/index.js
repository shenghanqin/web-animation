// cc 机器人的loading图标
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const prefixClass = `${PREFIX}-cclogo-loading-1-rotate`

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
        <div className={cx(`${prefixClass}-icon`)}>
          <svg viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" fill={iconColor} fillRule="evenodd">
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
              <path className={`${prefixClass}-ring`} d="M68.076,24.538 C67.055,24.972 65.882,24.496 65.449,23.479 C60.414,11.65 48.853,4.006 35.999,4.006 C18.358,4.006 4.007,18.358 4.007,35.999 C4.007,37.095 4.063,38.201 4.174,39.287 C4.285,40.388 3.484,41.371 2.384,41.483 C2.315,41.491 2.246,41.494 2.178,41.494 C1.163,41.494 0.293,40.725 0.188,39.694 C0.063,38.473 0,37.23 0,35.999 C0,16.149 16.149,0 35.999,0 C50.463,0 63.471,8.6 69.135,21.911 C69.568,22.928 69.095,24.105 68.076,24.538 M35.999,71.997 C22.293,71.997 9.958,64.382 3.806,52.126 C3.31,51.137 3.71,49.933 4.699,49.438 C5.686,48.942 6.891,49.339 7.388,50.329 C12.855,61.223 23.818,67.991 35.999,67.991 C53.639,67.991 67.991,53.639 67.991,35.999 C67.991,35.442 67.976,34.89 67.949,34.34 C67.893,33.236 68.743,32.295 69.848,32.239 C70.947,32.2 71.894,33.034 71.949,34.139 C71.98,34.755 71.997,35.375 71.997,35.999 C71.997,55.849 55.848,71.997 35.999,71.997"  ></path>
              <path className={`${prefixClass}-eye`} d="M32.18,31.701 L33.465,36.573 C33.826,37.944 33.027,39.353 31.679,39.72 C31.46,39.779 31.24,39.808 31.023,39.808 C29.908,39.808 28.887,39.051 28.585,37.904 L27.3,33.031 C26.939,31.661 27.739,30.252 29.086,29.885 C30.432,29.517 31.819,30.33 32.18,31.701 M51.272,26.043 L52.556,30.916 C52.918,32.287 52.117,33.695 50.77,34.063 C50.551,34.122 50.331,34.151 50.114,34.151 C48.999,34.151 47.978,33.394 47.676,32.246 L46.391,27.373 C46.03,26.002 46.831,24.594 48.179,24.226 C49.518,23.864 50.91,24.672 51.272,26.043"  ></path>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

LogoLoading.propTypes = {
  /**
   * loading样式，有白色和蓝色两种，也可以放入一个颜色
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