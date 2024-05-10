import stylisticsTs from '@stylistic/eslint-plugin-ts'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: {
    '@stylistic/ts': stylisticsTs,
  },
})
