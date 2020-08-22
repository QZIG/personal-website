/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const primary = '#11B5E9'
const secondary = '#00607e'
module.exports = {
  theme: {
    extend: {
      textColor: theme => ({
        primary: primary,
        secondary: secondary
      }),
      backgroundColor: theme => ({
        primary: primary,
      }),
      borderColor: theme => ({
        primary: primary,
      }),
      height: {
        'custom-header': '22rem'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
