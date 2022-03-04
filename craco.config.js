
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
  babel: {
    plugins: [
      "styled-jsx/babel"
    ],
  }
}
