module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
		project: './tsconfig.json'
	},
	env: {
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		'no-else-return': 1,
		'no-redeclare': 2,
		'no-useless-escape': 1,
		'no-inner-declarations': 0,
		'array-bracket-spacing': [1, 'never'],
		'brace-style': 0,
		'@typescript-eslint/brace-style': [2, '1tbs', { allowSingleLine: true }],
		'no-trailing-spaces': 1,
		'@typescript-eslint/space-before-function-paren': [1, {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}],
		'arrow-spacing': 1,
		'@typescript-eslint/comma-spacing': [1, {
			'before': false,
			'after': true
		}],
		'comma-dangle': 1,
		'func-call-spacing': 0,
		'@typescript-eslint/func-call-spacing': [2, 'never'],
		'indent': 0,
		'@typescript-eslint/indent': [2, 'tab', { SwitchCase: 1 }],
		quotes: 0,
		'@typescript-eslint/quotes': [2, 'single', { avoidEscape: true }],
		'array-callback-return': 2,
		eqeqeq: [1, 'always', { null: 'ignore' }],
		'no-eval': 2,
		'no-implied-eval': 2,
		'no-return-assign': 2,
		'no-unmodified-loop-condition': 0,
		'no-empty': 2,
		'@typescript-eslint/no-extra-semi': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-regex-spaces': 2,
		'no-unreachable': 2,
		'no-warning-comments': [1, {
			terms: ['todo', 'fixme'],
			location: 'start'
		}],
		'valid-typeof': [2, { requireStringLiterals: false }],
		'constructor-super': 2,
		'no-const-assign': 2,
		'no-dupe-class-members': 2,
		'no-var': 2,
		'prefer-const': [2, {
			destructuring: 'any',
			ignoreReadBeforeAssign: false
		}],
		'no-lonely-if': 2,
		'no-extra-parens': ['warn', 'all', {
			ignoreJSX: 'multi-line'
		}],
		'object-shorthand': [2, 'always', {
			ignoreConstructors: false,
			avoidQuotes: true
		}],
		'block-spacing': [2, 'always'],
		'eol-last': [2, 'always'],
		semi: 0,
		'@typescript-eslint/semi': 2,
		'@typescript-eslint/consistent-type-assertions': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-explicit-any': 0
	}
};
