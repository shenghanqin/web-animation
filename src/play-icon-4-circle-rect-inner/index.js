// cc 机器人的loading图标
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const audioClass = `${PREFIX}-play-icon-4-circle-rect-inner`

const DURATION_TIME = '6s'

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
    // 第一版 直线路径 M14 95,L14 25,L33 13, L91, 49, L91 71, L33 107, L14 95
    // 中间转折处长度为 （71-49)/2=11，
    const toPaused = status !== AUDIO_STATUS.PLAYING
    return (
      <div className={cx(`${audioClass}`)} style={style} onClick={this.changeStatus}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className={cx(`${audioClass}-btn`, {
          [`${audioClass}-play`]: status !== AUDIO_STATUS.PLAYING,
          [`${audioClass}-pause`]: status === AUDIO_STATUS.PLAYING
        })}>
          <g className={cx(`${audioClass}-group`)} transform="translate(19, 0)">
          <animateTransform attributeType="XML"
            attributeName="transform" type="translate"
            values="0 0; 19 0; 19 0"
            dur={DURATION_TIME} />   
            <g>
              <mask id={`${audioClass}-mask`}>
                <polygon fill="white" points="0,0 103.4,60 0,120" />
              </mask>
              <circle className={cx(`${audioClass}-ring`)} cx="34.64" cy="60" r="25.7" fill="red" mask={`url(#${audioClass}-mask)`}>
                <animate attributeType="XML"
                  attributeName="r"
                  values="69.2; 25.7; 25.7"
                  dur={DURATION_TIME} /> 
              </circle>
              
            </g>
          </g>
          <rect className={cx(`${audioClass}-eye`)} x="0" y="8.6" rx="15" ry="15" width="103.4" height="103.4" fill="blue" opacity="0.5">
            <animate attributeType="XML"
              attributeName="rx"
              values="51.7;51.7;15" 
              dur={DURATION_TIME} style={{ transform: 'scale(1)' }} />
            <animate attributeType="XML"
              attributeName="ry"
              values="51.7;51.7;15" 
              dur={DURATION_TIME} />
            <animateTransform attributeType="XML"
              attributeName="transform" type="scale"
              values="0.3; 0.5; 1"
              dur={DURATION_TIME} />
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