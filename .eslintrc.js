module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true
	},
	extends: 'standard',
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'spaced-comment': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: ['error', 'tab'],
		semi: ['error', 'always']
	}
};
