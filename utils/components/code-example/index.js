import React from 'react'
import CodeBlock from '@utils/components/code-block'
import './style.css'

export default class CodeExample extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isExpend: false
    }
  }

  toggleCode = () => {
    this.setState({
      isExpend: !this.state.isExpend
    })
  }

  render() {
    let { isExpend } = this.state
    let { codeSource, language, exampleCom } = this.props

    return (
      <div className='code-example-wrap'>
        <div className='code-example'>
          <div className='code-example-comp'>
            {exampleCom}
          </div>
          <a
            href="javascript:;"
            className='code-example-btn'
            onClick={this.toggleCode}
          >
            {this.props.description}
            <span className='code-example-btn-txt'>{ isExpend ? '隐藏代码' : '查看代码' }</span>
          </a>
          <div className={`code-example-code${isExpend ? ' expend' : ''}`}>
            <CodeBlock
              language={language}
              value={codeSource}
            />
          </div>
        </div>
      </div>
    )
  }
}