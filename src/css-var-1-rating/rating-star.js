import React from 'react'
import PropTypes from 'prop-types'
import styles from './rating-star.global.styl'
import { PREFIX } from '../../utils/consts'

const prefixClass = `${PREFIX}-css-var-1-rating-star`
const cx = require('classnames/bind').bind(styles)

/**
 * option: {
 *  starSelected: 1 // number 被选中的星星数量，支持小数
 *  total: 5, // number 星星总数，支持正整数,若传入小数，则强制向下取整
 * }
 */

export default class RatingStar extends React.PureComponent {
  constructor(props) {
    super(props)
    let _state = this.getInnerStar(props.starSelected, props.total)
    this.state ={
      ..._state
    }
  }

  render() {
    const { starType } = this.state

    if (!starType.length) {
      return null
    }

    return (
      <div className={cx(`${prefixClass}`)} >
        {
          starType.map((item, index) => {
            return (
              <span className={cx(`${prefixClass}-item`)} data-type={item} key={index}></span>
            )
          })
        }
      </div>
    )
  }

  // 获取星星状态
  getInnerStar(starSelected = 5, total = 5) {
    let type = []
    const n = starSelected.toFixed(1)
    const totalFloor = Math.floor(total)
    const nFloor = Math.floor(n)
    const nRound = Math.round(n)
    if (nFloor === nRound) {
      for (let j = 1; j <= nFloor; j++) {
        type.push('whole')
      }
      for (let j = 1; j <= totalFloor - nFloor; j++) {
        type.push('empty')
      }
    } else {
      for (let j = 1; j <= nFloor; j++) {
        type.push('whole')
      }
      type.push('half')
      for (let j = 1; j <= totalFloor - nRound; j++) {
        type.push('empty')
      }
    }
    return {
      starSelected,
      starType: [...type]
    }
  }

}

RatingStar.propTypes = {
  starSelected: PropTypes.number,
  total: PropTypes.number
}

RatingStar.defaultProps = {
  starSelected: 5,
  total: 5
}
