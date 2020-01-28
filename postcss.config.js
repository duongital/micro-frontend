module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      // require('@fullhuman/postcss-purgecss')({ // to optimize unused css classes
      //   content: [
      //     './index.html',
      //     './apps/vue/**/*.vue'
      //   ]
      // })
    ]
  }