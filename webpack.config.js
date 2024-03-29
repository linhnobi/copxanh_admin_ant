module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                syntax: 'postcss-scss',
                plugins: () => [
                  require('postcss-import'),
                  require('tailwindcss'),
                  require('autoprefixer')       
                ]
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  };