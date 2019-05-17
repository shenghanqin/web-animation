import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object, color } from '@storybook/addon-knobs'
import CodeExample from '@utils/components/code-example'
import CssVarComp from '@components/css-var-1-rating'
import CssVar from './examples/SvgSprite'
import README from './examples/SvgSprite.md'
import CssVarExampleCode from '!raw-loader!./examples/SvgSprite'

const propsOptions = () => ({
  skin: color('skin', 'blue'),
  style: object('style', {})
})

storiesOf('样式组件|SVG Sprite 雪碧图', module)
  .addDecorator(withKnobs)
  .add('调用方法', () => {
    return (
      <CodeExample
        codeSource={CssVarExampleCode}
        language='jsx'
        exampleCom={
          <CssVar {...propsOptions()}></CssVar>
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
        components: <CssVarComp /> // 如果需要在Readme.md中展示propsTable，这里需要显式的引入组件本身，Readme.md中添加 <!-- PROPS --> 占位符的地方会展示 propsTable
      },
    })