import React from 'react'
import PropTypes from 'prop-types'
import { PREFIX } from '../../utils/consts'
import styles from './styles.global.styl'
const Icon = require(`!raw-loader!../../svg-icons/svg-sprite.svg`)

console.log('Icon :', Icon)

const prefixClass = `${PREFIX}-css-var-1-rating`
const cx = require('classnames/bind').bind(styles)

export default class CssVar1Rating extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      iconStr: ''
    }
  }
  componentDidMount() {
    this.setState({
      iconStr: Icon.default
    })
    // console.log('getIcon :', 
    // console.log('123 :', 123);
  }

  getIcon = (name) => {
    console.log('name :', name);
    return require(`@svg-icons/${name}.svg`)
  }
  render() {
    const { iconStr } = this.state
    console.log('iconStr :', iconStr);
    return (
      <svg style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: iconStr }}>
      </svg>
    )
  }
}