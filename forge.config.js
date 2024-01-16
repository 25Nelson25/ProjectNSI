const { MakerZIP } = require('@electron-forge/maker-zip')
const { MakerDeb } = require('@electron-forge/maker-deb')
const { MakerRpm } = require('@electron-forge/maker-rpm')
const { WebpackPlugin } = require('@electron-forge/plugin-webpack')
const { MakerNSIS } = require('@toinane/electron-forge-maker-nsis')

const { mainConfig } = require('./config/webpack.main.config')
const { rendererConfig } = require('./config/webpack.renderer.config')

const config = {
    packagerConfig: {
        icon: './assets/icon',
        executableName: process.platform !== 'linux' ? undefined : 'copi-tache-pronot',
        name: process.platform === 'darwin' ? "CopiTachePronot" : undefined
    },
    rebuildConfig: {},
    makers: [
        new MakerNSIS({}),
        new MakerZIP({}, ['darwin']),
        new MakerRpm({
            options: {
                icon: './assets/icon.png'
            }
        }),
        new MakerDeb({
            options: {
                icon: './assets/icon.png'
            }
        })
    ],
    plugins: [
        new WebpackPlugin({
            mainConfig,
            renderer: {
                config: rendererConfig,
                entryPoints: [
                    {
                        html: './src/index.html',
                        js: './src/renderer.js',
                        name: 'main_window',
                        preload: {
                            js: './src/preload.js',
                            config: {
                                ...rendererConfig,
                                plugins: [],
                            },
                        },
                    },
                ],
            },
            devServer: {
                liveReload: false
            },
            devContentSecurityPolicy: "default-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-eval'; font-src 'self' static:; img-src 'self' project:; media-src 'self' project:",
        })
    ]
}

module.exports = config;