module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        'arrow-body-style': 0,
        'global-require': 0,
        'import/no-dynamic-require': 0,
        'array-callback-return': 0,
        'consistent-return': 0,
        'no-underscore-dangle': 0,
        'no-plusplus': 0,
        'prettier/prettier': [
            'error',
            {
                bracketSpacing: true,
                tabWidth: 4,
                useTabs: false,
                trailingComma: 'none',
                singleQuote: true,
                arrowParens: 'avoid',
                endOfLine: 'auto'
            }
        ]
    }
};
