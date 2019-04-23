import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object, color } from '@storybook/addon-knobs'
import CodeExample from '@utils/components/code-example'
import PlayIconComp from '@components/play-icon-1-border'
import PlayIcon from './examples/PlayIcon'
import README from './examples/PlayIcon.md'
import PlayIconExampleCode from '!raw-loader!./examples/PlayIcon'

const propsOptions = () => ({
  skin: color('skin', 'blue'),
  style: object('style', {})
})

storiesOf('动画组件|PlayIcon 播放按钮', module)
  .addDecorator(withKnobs)
  .add('调用方法', () => {
    return (
      <CodeExample
        codeSource={PlayIconExampleCode}
        language='jsx'
        exampleCom={
          <PlayIcon {...propsOptions()}></PlayIcon>
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
        components: <PlayIconComp /> // 如果需要在Readme.md中展示propsTable，这里需要显式的引入组件本身，Readme.md中添加 <!-- PROPS --> 占位符的地方会展示 propsTable
      },
    })