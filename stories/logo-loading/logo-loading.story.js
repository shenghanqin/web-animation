import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object, color } from '@storybook/addon-knobs'
import CodeExample from '@utils/components/code-example'
import LogoLoadingComp from '@components/logo-loading-3-path-eye'
import LogoLoading from './examples/LogoLoading'
import README from './examples/LogoLoading.md'
import LogoLoadingExampleCode from '!raw-loader!./examples/LogoLoading'

const propsOptions = () => ({
  skin: color('skin', 'blue'),
  style: object('style', {})
})

storiesOf('动画组件|LogoLoading 加载', module)
  .addDecorator(withKnobs)
  .add('调用方法', () => {
    return (
      <CodeExample
        codeSource={LogoLoadingExampleCode}
        language='jsx'
        exampleCom={
          <LogoLoading {...propsOptions()}></LogoLoading>
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
        components: <LogoLoadingComp /> // 如果需要在Readme.md中展示propsTable，这里需要显式的引入组件本身，Readme.md中添加 <!-- PROPS --> 占位符的地方会展示 propsTable
      },
    })