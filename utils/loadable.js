import React from 'react'

export default function loadable({ component, loading }) {
  return class AsyncComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Component: null,
        Loading: loading ||  null,
        loaded: false
      }
    }
    componentDidMount() {
      component().then(c => {
        this.setState({
          Component: c.default,
          loaded: true
        })
      }).catch(e=> {
        // 上报e
      })
    }
    
    componentDidCatch(err, info) {
      console.log('err', err)
    }

    render() {
      const { Component, loaded, Loading } = this.state
      return loaded ? <Component {...this.props}/> : Loading && <Loading {...this.props}/>
    }
  }
}