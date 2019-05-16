import React, { Component } from 'react'

import CssVar1Rating from '@components/css-var-1-rating'
import { info, list } from './data'


export default class BackTopExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      hasError: false,
      ratingList: [],
      ratingInfo: {}
    }
  }

  loadData = () => {
    this.setState({
      isLoading: false,
      hasError: false,
      ratingInfo: info,
      ratingList: list.items
    })
  }



  render() {
    const { ratingInfo, ratingList, isLoading, hasError } = this.state
    console.log('ratingInfo, ratingList :', ratingInfo, ratingList);
    return (
      <div>
        <button onClick={this.loadData}>加载数据</button>
        <React.StrictMode>
          <CssVar1Rating ratingList={ratingList} ratingInfo={ratingInfo} isLoading={isLoading} hasError={hasError}></CssVar1Rating>
        </React.StrictMode>
      </div>
    )
  }
}