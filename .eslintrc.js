module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
      'no-console': 'off',
      'space-before-function-paren': 'off',
      'no-extra-semi': 'off',
      semi: 'off',
      quotes: ['error', 'single'],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/no-v-html': 'off',
      'vue/no-parsing-error': 'off',
      'vue/html-end-tags': 'off',
      'vue/attributes-order': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': 'error',
      'vue/multi-word-component-names': 0,
      'no-unref': 'off',
      'no-undef': 'off'
    },
  };
  