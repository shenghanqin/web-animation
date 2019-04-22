// cc 机器人的loading图标
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const audioClass = `${PREFIX}-play-icon-1-border`

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
        <div onClick={this.togglePlay} className={cx(`${audioClass}-btn-play`, { [`${audioClass}-pause`]: status === AUDIO_STATUS.PLAYING })}></div>
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