import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    plugins: {
      'react-hooks': reactHooks,
      prettier: prettierPlugin
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error', // Para apontar problemas no Hooks como erro.
      'react-hooks/exhaustive-deps': 'warn', // Para apontar algum problema nas dependências, ele irá apontar como um alerta.
      'react/prop-types': 'off', // Para desabilitar a função de utilizar o Prop-types, pois é melhor utilizar o typescript com o react.
      'react/react-in-jsx-scope': 'off', // Para desabilitar a função de obrigar a importação do react em todos os arquivos, aonde as vezes ele não é utilizado.
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Para não precisar explicitar o tipo de retorno nas funções.
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'none',
          semi: false
        }
      ]
    }
  },
  {
    settings: {
      react: { version: 'detect' } // Para o ESLint detectar a versão do React utilizado.
    }
  }
]
