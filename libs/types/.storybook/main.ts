import type { StorybookConfig } from '@storybook/react-vite'
import { dirname, join } from 'node:path'
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	staticDirs: [...getCodeEditorStaticDirs(__filename)],
	addons: [
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('storybook-addon-code-editor'),
		getAbsolutePath('@storybook/experimental-addon-test'),
		getAbsolutePath('storybook-addon-tag-badges'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	features: {
		backgroundsStoryGlobals: true,
	},
}
export default config
