import React from 'react'
import PropTypes from 'prop-types'
// import RatingAction, { name } from './model'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'
// import RatingStar from './rating-star'
// import RatingTag from './rating-tag'
// import RatingItem from './rating-item'


const prefixClass = `${PREFIX}-rating`
const cx = require('classnames/bind').bind(styles)

// @connect(state => ({
//   isLoading: state[name].isLoading,
//   hasError: state[name].hasError,
//   ratingList: state[name].ratingList,
//   ratingInfo: state[name].ratingInfo,
//   haveNextPage: state[name].haveNextPage,
//   isLoadingMore: state[name].isLoadingMore,
//   hasErrorMore: state[name].hasErrorMore,
//   start: state[name].start,
// }), null)
export default class CssVar1Rating extends React.PureComponent {
  render() {
    return (
      <div>123</div>
    )
  }
}