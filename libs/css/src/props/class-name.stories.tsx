import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as css from '../index.ts'

export default {
	title: 'props/ClassNameProps',
	tags: ['version:1.0.0', 'autodocs', 'new'],
	render: () => <div />,
} satisfies Meta

export const Example: StoryObj = {
	tags: ['!test', 'editor'],
	parameters: defineDocsParam({
		description: {
			story: 'The `className` property accepts a string value for CSS class names.',
		},
		source: {
			code: dedent`import type { ClassNameProps } from '@just-web/css'

			interface MyComponentProps extends PropsWithChildren<ClassNameProps> {}

			const MyComponent = ({ className, children }: MyComponentProps) => {
				return <div className={className}>{children}</div>
			}

			export default () => <MyComponent className="text-blue-800">Hello in blue</MyComponent>`,
		},
	}),
}

makeLiveEditStory(Example, {
	availableImports: {
		'@just-web/css': css,
	},
	code: Example.parameters?.['docs']?.['source']?.code,
})
