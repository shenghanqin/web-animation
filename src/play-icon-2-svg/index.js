// cc 机器人的loading图标
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const audioClass = `${PREFIX}-play-icon-2-svg`

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
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 120 120" >
          <mask id={`${audioClass}-mask`}>
            <rect x="0" y="12" width="96" height="96" rx="12" ry="12" fill="white"></rect>
          </mask>
          {/* <path d="M0 0,L48 30,L96 60, L48 90, L0 120" fill={iconColor}></path> */}
          {/* <path d="M0 12,L96 12,L96 60, L96 108, L0 108" fill={iconColor}></path> */}
          <path d="M0 0,L48 30,L96 60, L48 90, L0 120" fill={iconColor} className={cx(`${audioClass}-btn-play`, { [`${audioClass}-pause`]: status === AUDIO_STATUS.PLAYING })} stroke={iconColor} strokeWidth="0"></path>
          {/* <polygon className={cx(`${audioClass}-btn-play`, { [`${audioClass}-pause`]: status === AUDIO_STATUS.PLAYING })} stroke={iconColor} fill={iconColor} /> */}
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