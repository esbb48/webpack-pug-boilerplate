var fs = require('fs')
module.exports = {
  generateTemplates: function (isProd) {
    const path = './src/pages/'
    return fs.readdirSync(path)
      .map(function(file) {
        var to = (isProd || file === 'index.njk')
          ? file.replace('.njk', '.html')
          : file.replace('.njk', '')
        return {
          from: path + file,
          to: to,
        }
      })


  }
}
