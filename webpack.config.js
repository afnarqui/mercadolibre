const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const path = require('path')

module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: "./src/favicon.ico"
        }),
        new WebpackPwaManifestPlugin({
                name: 'Mercado Libre',
                shortname: 'MercadoLibre',
                description: 'Mercado Libre es una aplicación, creada para buscar productos. desarrollada en React',
                background_color: '#fff',
                theme_color: '#FFE600',
                icons: [
                  {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                  }
                ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
                runtimeCaching: [
                  {
                    urlPattern: new RegExp('https://mercadolibreprueba.web.app'),
                    handler: 'NetworkFirst',
                    options: {
                      cacheName: 'api'
                    }
                  }
                ]
              })
    ],
    module: {
        rules: [
                {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                                loader: 'babel-loader',
                                options: {
                                        presets: [
                                                '@babel/preset-env',
                                                '@babel/preset-react'
                                        ]
                                }
                        }
                }
        ]
        }
}