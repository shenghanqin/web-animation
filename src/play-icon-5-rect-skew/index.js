// cc 机器人的loading图标
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const audioClass = `${PREFIX}-play-icon-5-rect-skew`

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
    let toStatus = AUDIO_STATUS.IDLE
    if (this.state.status === AUDIO_STATUS.IDLE) {
      toStatus = AUDIO_STATUS.PLAYING
    } else if (this.state.status === AUDIO_STATUS.PLAYING) {
      toStatus = AUDIO_STATUS.PAUSED
    } else if (this.state.status === AUDIO_STATUS.PAUSED) {
      toStatus = AUDIO_STATUS.PLAYING
    }
    this.setState({
      status: toStatus
    })
  }

  render() {
    let { style, skin } = this.props
    const { status } = this.state
    let iconColor = SKIN[skin] || skin
    return (
      <div className={cx(`${audioClass}`)} style={style} onClick={this.changeStatus}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className={cx(`${audioClass}-svg`, {
          [`${audioClass}-to-play`]: status === AUDIO_STATUS.PAUSED,
          [`${audioClass}-to-pause`]: status === AUDIO_STATUS.PLAYING
        })}>
          <rect className={cx(`${audioClass}-ring`)} x="0" y="8.65" rx="0" ry="0" width="103.4" height="103.4" fill={iconColor} stroke={iconColor}>
          </rect>
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