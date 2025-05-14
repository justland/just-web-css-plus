import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import { getThemeByDataAttribute } from '../index.ts'

const meta = {
	title: 'theme/getThemeByDataAttribute',
	tags: ['autodocs', 'new', 'version:1.0.0'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof getThemeByDataAttribute>

const themes = {
	light: 'light-theme',
	dark: 'dark-theme',
	system: 'system-theme',
} as const

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Gets theme value from a data attribute with fallback to default theme.',
		},
	}),
	loaders: [
		() => {
			document.documentElement.setAttribute('data-theme', 'dark-theme')
			const theme = getThemeByDataAttribute({
				themes,
				defaultTheme: 'dark',
				attributeName: 'data-theme',
			})
			return { theme }
		},
	],
	render: (_, { loaded: { theme } }) => {
		const value = document.documentElement.getAttribute('data-theme')
		return (
			<div className="font-sans">
				<p>Current theme: {theme === undefined ? '(undefined)' : theme}</p>
				<p>Data attribute value: {value === null ? '(null)' : value}</p>
			</div>
		)
	},
	play: async ({ loaded: { theme } }) => {
		await expect(theme).toBe('dark')
	},
}

export const UndefinedWhenNotSet: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Returns undefined when data attribute is not set.',
		},
	}),
	loaders: [
		() => {
			document.documentElement.removeAttribute('data-not-exist')
			const theme = getThemeByDataAttribute({
				themes,
				attributeName: 'data-not-exist',
			})
			return { theme }
		},
	],
	render: (_, { loaded: { theme } }) => {
		const value = document.documentElement.getAttribute('data-not-exist')
		return (
			<div className="font-sans">
				<p>Current theme: {theme === undefined ? '(undefined)' : theme}</p>
				<p>Data attribute value: {value === null ? '(null)' : value}</p>
			</div>
		)
	},
	play: async ({ loaded: { theme } }) => {
		await expect(theme).toBeUndefined()
	},
}

export const DefaultTheme: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Falls back to default theme when data attribute value is not a valid theme.',
		},
	}),
	loaders: [
		() => {
			document.documentElement.removeAttribute('data-theme')
			const theme = getThemeByDataAttribute({
				themes,
				defaultTheme: 'system',
				attributeName: 'data-theme',
			})
			return { theme }
		},
	],
	render: (_, { loaded: { theme } }) => {
		const value = document.documentElement.getAttribute('data-theme')
		return (
			<div className="font-sans">
				<p>Current theme: {theme === undefined ? '(undefined)' : theme}</p>
				<p>Data attribute value: {value === null ? '(null)' : value}</p>
			</div>
		)
	},
	play: async ({ loaded: { theme } }) => {
		await expect(theme).toBe('system')
	},
}

export const InvalidTheme: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Falls back to default theme when data attribute value is not a valid theme.',
		},
	}),
	render: () => {
		document.documentElement.setAttribute('data-theme', 'invalid-theme')
		const value = document.documentElement.getAttribute('data-theme')
		const theme = getThemeByDataAttribute({
			themes,
			defaultTheme: 'system',
			attributeName: 'data-theme',
		})

		return (
			<div className="font-sans">
				<p>Current theme: {theme === undefined ? '(undefined)' : theme}</p>
				<p>Data attribute value: {value === null ? '(null)' : value}</p>
			</div>
		)
	},
	play: async () => {
		const theme = getThemeByDataAttribute({
			themes,
			defaultTheme: 'system',
			attributeName: 'data-theme',
		})
		await expect(theme).toBe('system')
	},
}
