global.owner = ['50371777771'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = 'Susi\nβ πΏπ πππππππππ ππ ππ  ππ πππππ‘ππ£π...\nβ ππ¬ ππ₯ πππ¦π’π§π¨\nβ οΈθηε¨β οΈ '
global.author = 'β¬π€οΈSusiBotπ€οΈ\nβ³  π₯+503 7177 7771π₯\nβ³  πΊSusi.li_πΊ'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
