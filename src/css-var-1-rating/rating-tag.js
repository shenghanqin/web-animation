import React from 'react'
import PropTypes from 'prop-types'
import styles from './rating-tag.global.styl'
import { PREFIX } from '../../utils/consts'

const prefixClass = `${PREFIX}-css-var-1-rating-tag`
const cx = require('classnames/bind').bind(styles)

export default class RatingTag extends React.PureComponent {
  render() {
    const { allTags } = this.props

    return (
      <div className={cx(`${prefixClass}-list`)}>
        {
          allTags.map((item) => {
            return (
              <span key={item.tagId} className={cx(`${prefixClass}-item`)} >
                {item.title}&nbsp;({item.sum > 999 ? 999 : item.sum})
              </span>
            )
          })
        }
      </div>
    )
  }
}


RatingTag.propTypes = {
  allTags: PropTypes.array
}

RatingTag.defaultProps = {
  allTags: []
}
