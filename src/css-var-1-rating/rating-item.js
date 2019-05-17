import React from 'react'
import PropTypes from 'prop-types'
import RatingStar from './rating-star'
import dayjs from 'dayjs'
import styles from './rating-item.global.styl'
import { PREFIX } from '../../utils/consts'

const prefixClass = `${PREFIX}-css-var-1-rating-item`
const cx = require('classnames/bind').bind(styles)

// 时间格式处理
const getFormatDate = (date = '') => {
  let dataTmp = dayjs(date)
  let thisYear = (new Date()).getFullYear()
  let startYear = dataTmp.year()
  return dataTmp.format(thisYear === startYear ? 'MM-DD' : 'YYYY-MM-DD')
}

export default class RatingItem extends React.PureComponent {

  constructor(props) {
    super(props)
    let { item = {} } = props
    this.state = {
      hideMoreTags: item.tags && item.tags.length > 3
    }
  }

  showAllTag = (e) => {
    e.stopPropagation()
    this.setState({ hideMoreTags: false })
  }

  render() {
    let { item = {}, isGoObject, onClick } = this.props
    const { hideMoreTags } = this.state
    // 新老接口转换
    if (item.ratingUser) {
      item = {
        ...item,
        ratingUserId: item.ratingUser.userId,
        ratingUserAvatar: item.ratingUser.avatar,
        ratingNickName: item.ratingUser.nickName,
        ratingUserName: item.ratingUser.userName
      }
    }

    let avatarStyle = {}
    if (item.ratingUserAvatar) {
      avatarStyle.backgroundImage = `url(${item.ratingUserAvatar, 66})`
    }

    return (
      <div className={cx(`${prefixClass}`, { [`${prefixClass}-linked`]: isGoObject && item.objectId })} onClick={isGoObject && item.objectId ? onClick.bind(this, item) : () => {}}>
        <div className={cx(`${prefixClass}-info`)}>
          <span className={cx(`${prefixClass}-avatar`)} style={avatarStyle}>
          </span>
          <span className={cx(`${prefixClass}-user`)}>
            {item.ratingNickName || item.ratingUserName}
          </span>
          <span className={cx(`${prefixClass}-star`)}>
            <RatingStar starSelected={item.stars} />
          </span>
          <span className={cx(`${prefixClass}-time`)}>
            {item.createdTime === item.updatedTime ? '' : '更新于'}{getFormatDate(item.updatedTime)}
          </span>
        </div>
        {
          item.tags && item.tags.length > 0 && (
            <div className={cx(`${prefixClass}-tags`, { [`${prefixClass}-more-hide`]: hideMoreTags})}>
              {
                item.tags.map((item, index) => {
                  return <span key={index} className={cx(`${prefixClass}-tag`)}>{item.title}</span>
                })
              }
              <span className={cx(`${prefixClass}-tag-more`)} onClick={this.showAllTag}>等{item.tags.length}个标签</span>
            </div>
          )
        }
        {!!item.ratingContent && <div className={cx(`${prefixClass}-dec`)}>{item.ratingContent}</div>}
        
        {
          (!item.tags || item.tags.length === 0) && !item.ratingContent && (
            <div className={cx(`${prefixClass}-dec-grey`)}>此用户没有填写评价内容</div>
          )
        }
        {
          item.replyContent
            ? (
              <div className={cx(`${prefixClass}-reply-text`)}>
                <span>老师回复：</span>{item.replyContent}
              </div>
            )
            : null
        }
      </div>
    )
  }

}

RatingItem.propTypes = {
  item: PropTypes.object,
  /**
   * 是否可以到达评价主体，如单个节目
   */
  isGoObject: PropTypes.bool,
  /**
   * 点击事件
   */
  onClick: PropTypes.func
}

RatingItem.defaultProps = {
  item: {},
  isGoObject: false,
  onClick: () => {}
}
