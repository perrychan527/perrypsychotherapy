const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, 'dist')
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

// All SPA routes that need their own index.html
const routes = [
  'en',
  'en/therapy',
  'en/sessioninfo',
  'en/memories',
  'en/sd',
  'en/sd/about',
  'en/sd/london_july',
  'en/sd/london_sept',
  'en/sd/hk_may',
  'hk',
  'hk/therapy',
  'hk/sessioninfo',
  'hk/memories',
  'hk/sd',
  'hk/sd/about',
  'hk/sd/london_july',
  'hk/sd/london_sept',
  'hk/sd/hk_may',
  'sc',
  'sc/therapy',
  'sc/sessioninfo',
  'sc/memories',
  'sc/sd',
  'sc/sd/about',
  'sc/sd/london_july',
  'sc/sd/london_sept',
  'sc/sd/hk_may',
  'ja',
  'ja/therapy',
  'ja/sessioninfo',
  'ja/memories',
  'ja/sd',
  'ja/sd/about',
  'ja/sd/london_july',
  'ja/sd/london_sept',
  'ja/sd/hk_may',
]

routes.forEach(route => {
  const dir = path.join(distDir, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), indexHtml)
})

console.log(`Created index.html for ${routes.length} routes`)
