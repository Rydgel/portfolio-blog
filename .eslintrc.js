module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:@next/next/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
    },
    settings: { react: { version: 'detect' } },
};
