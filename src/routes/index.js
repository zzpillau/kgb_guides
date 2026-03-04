const publicPath = ''

export default {
  mainPage: () => '/',
  pageNotFound: () => [publicPath, '*'].join('/'),
}
