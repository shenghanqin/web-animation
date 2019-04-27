// cc 机器人的loading图标
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'

const cx = classnames.bind(styles)
const audioClass = `${PREFIX}-play-icon-4-circle-rect-inner`

const DURATION_TIME = '0.6s'

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
      status: AUDIO_STATUS.PLAYING
    }
  }

  changeStatus = () => {
    this.setState({
      status: this.state.status === AUDIO_STATUS.PLAYING ? AUDIO_STATUS.IDLE : AUDIO_STATUS.PLAYING
    })
  }

  renderToPause = () => {
    let { skin } = this.props
    let iconColor = SKIN[skin] || skin
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className={cx(`${audioClass}-svg`)}>
        <g className={cx(`${audioClass}-group`)} transform="translate(19, 0)">
          <animateTransform attributeType="XML"
            attributeName="transform" type="translate"
            values="0 0; 19 0; 19 0"
            dur={DURATION_TIME} />
          <g>
            <mask id={`${audioClass}-mask`}>
              <polygon fill="white" points="0,0 103.4,60 0,120" />
            </mask>
            <circle className={cx(`${audioClass}-ring`)} cx="34.64" cy="60" r="25.7" fill={iconColor} mask={`url(#${audioClass}-mask)`}>
              <animate attributeType="XML"
                attributeName="r"
                values="69.2; 25.7; 25.7"
                dur={DURATION_TIME} />
            </circle>

          </g>
        </g>
        <rect className={cx(`${audioClass}-eye`)} x="0" y="8.6" rx="15" ry="15" width="103.4" height="103.4" fill={iconColor} transform="scale(1)">
          <animate attributeType="XML"
            attributeName="rx"
            values="51.7;51.7;15"
            dur={DURATION_TIME} />
          <animate attributeType="XML"
            attributeName="ry"
            values="51.7;51.7;15"
            dur={DURATION_TIME} />
          <animateTransform attributeType="XML"
            attributeName="transform" type="scale"
            origin="center"
            values="0.3; 0.5; 1"
            dur={DURATION_TIME} />
        </rect>
      </svg>
    )
  }

  // 反向
  renderToPlay = () => {
    let { skin } = this.props
    let iconColor = SKIN[skin] || skin
    return (
      <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className={cx(`${audioClass}-svg`)}>
          <g className={cx(`${audioClass}-group`)} transform="translate(0, 0)">
            <animateTransform attributeType="XML"
              attributeName="transform" type="translate"
              values="19; 19 0; 0 0"
              dur={DURATION_TIME} />
            <g>
              <mask id={`${audioClass}-mask`}>
                <polygon fill="white" points="0,0 103.4,60 0,120" />
              </mask>
              <circle className={cx(`${audioClass}-ring`)} cx="34.64" cy="60" r="69.2" fill={iconColor} mask={`url(#${audioClass}-mask)`}>
                <animate attributeType="XML"
                  attributeName="r"
                  values="25.7; 25.7; 69.2"
                  dur={DURATION_TIME} />
              </circle>

            </g>
          </g>
          <rect className={cx(`${audioClass}-eye`)} x="0" y="8.6" rx="51.7" ry="51.7" width="103.4" height="103.4" fill={iconColor} transform="scale(0.3)">
            <animate attributeType="XML"
              attributeName="rx"
              values="15;51.7;51.7"
              dur={DURATION_TIME}  />
            <animate attributeType="XML"
              attributeName="ry"
              values="15;51.7;51.7"
              dur={DURATION_TIME} />
            <animateTransform attributeType="XML"
              attributeName="transform" type="scale"
              values="1; 0.5; 0.3"
              dur={DURATION_TIME} />
          </rect>
        </svg>
      </div>
    )
  }

  render() {
    let { style } = this.props
    const { status } = this.state

    return (
      <div className={cx(`${audioClass}`)} style={style} onClick={this.changeStatus}>
        {status === AUDIO_STATUS.PLAYING ? this.renderToPause() : this.renderToPlay() }
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