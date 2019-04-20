import React from 'react'
import { parse } from 'react-docgen'
import './styles.css'

export default class ProptypesDocs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      docs: ''
    }
  }

  componentDidMount () {
    this.parseProptype()
  }

  parseProptype = () => {
    let { proptypesDocs } = this.props
    this.setState({
      docs: parse(proptypesDocs)
    })
  }

  render () {
    let { docs } = this.state
    let { description = '', displayName = '', methods = [], props = [] } = docs
    return (
      <div className="markdown-body markdown-body-offset">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>必需</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
          {
            Object.keys(props).map((propName, index) => {
              let prop = props[propName] || {}
              return (
                <tr key={index}>
                  <td>{propName}</td>
                  <td>{prop.description}</td>
                  <td>{prop.type && prop.type.name}</td>
                  <td>{String(prop.required)}</td>
                  <td>{prop.defaultValue && prop.defaultValue.value}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}