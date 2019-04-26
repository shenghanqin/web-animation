
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const audioClass = `${PREFIX}-loading-1-preloader`

const SKIN = {
  blue: '#2F5AFF',
  white: '#fff'
}
export const AUDIO_STATUS = {
  IDLE: 'idle',
  LOADING_METADATA: 'loading_metadata',
  LOADING: 'loading',
  PLAYING: 'playing',
  WAITING: 'waiting',
  PAUSED: 'paused',
  SUSPENDED: 'suspend',
  ENDED: 'ended'
}

// study // https://loading.io/spinner/squaricle/-square-circle-preloader



export default class LogoLoading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: AUDIO_STATUS.IDLE
    }
  }

  changeStatus = () => {
    this.setState({
      status: this.state.status === AUDIO_STATUS.PLAYING ? AUDIO_STATUS.IDLE : AUDIO_STATUS.PLAYING
    })
  }

  render() {
    let { skin, style } = this.props
    let iconColor = SKIN[skin] || skin
    const { status } = this.state
    return (
      <div className={cx(`${audioClass}`)} style={style} onClick={this.changeStatus}>
        <svg width="80px" height="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-squaricle">
          <g transform="translate(50 50)">
            <g transform="scale(0.794652 0.794652)">
              <animateTransform attributeName="transform" type="scale" calcMode="spline" values="0.8;0.5;0.8" keyTimes="0;0.5;1" dur="1.5s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animateTransform>
              <rect x="-45" y="-45" width="90" height="90" fill="#ffffcb" stroke="#ff7c81" strokeWidth="8" rx="5.55556" transform="rotate(4.81284)">
                <animate attributeName="rx" calcMode="linear" values="0;50;0" keyTimes="0;0.5;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-width" calcMode="linear" values="8;24;8" keyTimes="0;0.5;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
                <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 0 0;270 0 0;540 0 0" keyTimes="0;0.5;1" dur="1.5s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animateTransform>
              </rect>
            </g>
          </g>
        </svg>
        <svg width="80px" height="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-squaricle">
          <g transform="translate(50 50)">
            <g transform="scale(0.794652 0.794652)">
              {/* <animateTransform attributeName="transform" type="scale" calcMode="spline" values="0.8;0.5;0.8" keyTimes="0;0.5;1" dur="1.5s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animateTransform> */}
              <rect x="-45" y="-45" width="90" height="90" fill="#ffffcb" stroke="#ff7c81" strokeWidth="8" rx="5.55556" transform="rotate(4.81284)">
                <animate attributeName="rx" calcMode="linear" values="0;50;0" keyTimes="0;0.5;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-width" calcMode="linear" values="8;24;8" keyTimes="0;0.5;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
                {/* <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 0 0;270 0 0;540 0 0" keyTimes="0;0.5;1" dur="1.5s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animateTransform> */}
              </rect>
            </g>
          </g>
        </svg>
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