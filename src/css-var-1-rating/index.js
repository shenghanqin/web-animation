import React from 'react'
import PropTypes from 'prop-types'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'
import RatingStar from './rating-star'
import RatingTag from './rating-tag'
import RatingItem from './rating-item'


const prefixClass = `${PREFIX}-rating`
const cx = require('classnames/bind').bind(styles)

export default class CssVar1Rating extends React.PureComponent {
  render() {
    const {
      componentTitle,
      ratingInfo,
      ratingList,
      isLoading,
      hasError,
      haveNextPage,
      isLoadingMore,
      hasErrorMore,
      isGoObject
    } = this.props
    const { tags } = ratingInfo


    if (hasError) return null

    if (isLoading) {
      return <div className={cx(`${prefixClass} ${prefixClass}-loading`)} >
        {
          componentTitle
            ? <div className={cx(`${prefixClass}-title`)}>{componentTitle}</div>
            : null
        }
        
        <div className={cx(`${prefixClass}-text-loading`)}>加载中...</div>
      </div>
    }

    return (
      <div className={cx(`${prefixClass}`)}>
        {componentTitle
          ? <div className={cx(`${prefixClass}-title`)}>{componentTitle}</div>
          : null}
        {
          ratingInfo.ratingCount < 5
            ? (
              <div className={cx(`${prefixClass}-less-tips`)}>评价不够，无法显示评分</div>
            )
            : (
              <div className={cx(`${prefixClass}-info`)}>
                <div className={cx(`${prefixClass}-r-left`)}>
                  {(ratingInfo.starAvg).toFixed(1)}
                  <span>分</span>
                </div>
                <div className={cx(`${prefixClass}-r-right`)}>
                  <p className={cx(`${prefixClass}-r-people`)}>{ratingInfo.ratingCount}人评价</p>
                  <div className={cx(`${prefixClass}-r-star`)}>
                    <RatingStar starSelected={ratingInfo.starAvg} />
                  </div>
                </div>
              </div>
            )
        }
        {
          tags.length > 0 && (
            <div className={cx(`${prefixClass}-label`)}>
              <RatingTag allTags={tags} />
            </div>
          )
        }
        {
          ratingList.length > 0 && (
            <div className={cx(`${prefixClass}-list`)}>
              {ratingList.map((item, index) =>
                <RatingItem key={index} item={item} onClick={this.onPress} isGoObject={isGoObject} />
              )}
            </div>
          )
        }
        {
          isLoadingMore && !hasErrorMore
            ? <div className={cx(`${prefixClass}-text-loading`)}>加载中...</div>
            : null
        }
        {!isLoadingMore && !!hasErrorMore
          ? <div className={cx(`${prefixClass}-text-loading`)} type={'REFRESH'} refresh={this.loadMoreRating} refreshText={'请重试'}>加载失败，<span className={cx(`${prefixClass}-retry`)}></span></div>
          : null}
        {!isLoadingMore && !hasErrorMore && haveNextPage
          ? <div className={cx(`${prefixClass}-load-more`)} onClick={this.loadMoreRating}>查看更多评价 </div>
          : null
        }
      </div>
    )
  }
}

CssVar1Rating.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  ratingList: PropTypes.array,
  ratingInfo: PropTypes.object,
  haveNextPage: PropTypes.bool,
  isLoadingMore: PropTypes.bool,
  hasErrorMore: PropTypes.bool,
  componentTitle: PropTypes.string
}

CssVar1Rating.defaultProps = {
  isLoading: true,
  hasError: false,
  ratingList: [],
  ratingInfo: {},
  haveNextPage: true,
  isLoadingMore: false,
  hasErrorMore: false,
  componentTitle: '评价'
}