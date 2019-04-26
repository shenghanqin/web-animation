import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object, color } from '@storybook/addon-knobs'
import CodeExample from '@utils/components/code-example'
import LoadingTestComp from '@components/loading-1-preloader-square-circle'
import LoadingTest from './examples/LoadingTest'
import README from './examples/LoadingTest.md'
import LoadingTestExampleCode from '!raw-loader!./examples/LoadingTest'

const propsOptions = () => ({
  skin: color('skin', 'blue'),
  style: object('style', {})
})

storiesOf('动画组件|LoadingTest 加载动画尝试', module)
  .addDecorator(withKnobs)
  .add('调用方法', () => {
    return (
      <CodeExample
        codeSource={LoadingTestExampleCode}
        language='jsx'
        exampleCom={
          <LoadingTest {...propsOptions()}></LoadingTest>
        }
        description='默认'
      />
    )
  }, {
      readme: {
        // Show readme before story
        content: README,
        // Show readme at the addons panel
        sidebar: README,
        components: <LoadingTestComp /> // 如果需要在Readme.md中展示propsTable，这里需要显式的引入组件本身，Readme.md中添加 <!-- PROPS --> 占位符的地方会展示 propsTable
      },
    })