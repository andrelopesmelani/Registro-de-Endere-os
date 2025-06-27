import vuetify from 'eslint-config-vuetify'
import importPlugin from 'eslint-plugin-import'

export default [
  vuetify(),
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/no-duplicates': 'off',
    },
  },
]
