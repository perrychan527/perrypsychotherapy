const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, 'dist')
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

const base = 'https://www.perrywtchan.com'

// Route-specific meta: [title, description]
const meta = {
  en: [
    'Perry WT Chan 陳渭東 — Psychotherapist / Counsellor, Edinburgh, UK & Hong Kong',
    'Chinese-speaking psychotherapist offering psychotherapy, Jungian sandplay and Social Dreaming in English, Cantonese or Mandarin. In-person in Edinburgh, online across the UK including London, Hong Kong and internationally. Depression, anxiety, trauma, relationships. Free first session.'
  ],
  'en/therapy': [
    'Therapy — Psychodynamic, Jungian Sandplay & Person-Centred — Perry WT Chan',
    'Psychodynamic psychotherapy, Jungian sandplay therapy, and person-centred counselling for depression, anxiety, childhood trauma, and relationship difficulties. In Edinburgh and online.'
  ],
  'en/sessioninfo': [
    'Session Info & Fees — Perry WT Chan, Psychotherapist',
    'Counselling session information, fees, and how to book. In-person in Edinburgh, online across the UK including London, Hong Kong and internationally.'
  ],
  'en/sessioninfo/edinburgh': [
    'Face-to-Face Counselling & Sandplay Therapy in Edinburgh — Perry WT Chan',
    'In-person psychotherapy, counselling and Jungian sandplay therapy in Edinburgh. BACP-registered Chinese-speaking psychotherapist. Free initial consultation.'
  ],
  'en/sessioninfo/online-uk': [
    'Online Counselling Across the UK — London, Manchester & Beyond — Perry WT Chan',
    'Online psychotherapy and counselling across the UK — London, Manchester, Birmingham, Glasgow, Edinburgh and beyond. Chinese-speaking BACP-registered psychotherapist. Free initial consultation.'
  ],
  'en/sessioninfo/hong-kong': [
    'Online Counselling & Psychotherapy for Hong Kong 香港網上心理輔導 — Perry WT Chan 陳渭東',
    'Online psychotherapy and counselling for Hong Kong clients in Cantonese, Mandarin and English. HK$1,100/session. BACP-registered psychotherapist specialising in depression, anxiety, trauma and relationship difficulties. Free initial consultation.'
  ],
  'en/sessioninfo/international': [
    'Online Counselling for International Clients — Perry WT Chan 陳渭東',
    'Online psychotherapy for international clients in Cantonese, Mandarin and English. BACP-registered psychotherapist based in Edinburgh. Cross-timezone sessions available. Free initial consultation.'
  ],
  'en/memories': [
    'Memories — Perry WT Chan, Psychotherapist',
    'Personal reflections and creative explorations by Perry WT Chan, psychotherapist based in Edinburgh, UK.'
  ],
  'en/sd/about': [
    'Social Dreaming Matrix — Perry WT Chan, UK & Hong Kong',
    'Social Dreaming Matrix events hosted by Perry WT Chan in the UK and Hong Kong. Exploring collective dreams and the unconscious together.'
  ],
  hk: [
    '陳渭東 Perry WT Chan — 心理治療師 / 輔導員，愛丁堡、英國（包括倫敦）及香港',
    '華人心理治療師，提供心理治療、榮格沙遊及 Social Dreaming，廣東話、英語及普通話服務。處理抑鬱、焦慮、創傷及關係困難。愛丁堡面談，全英國及香港網上心理輔導。首次諮詢免費。'
  ],
  'hk/therapy': [
    '治療 — 精神動力、榮格沙遊及人本治療 — 陳渭東',
    '精神動力心理治療、榮格沙遊治療及人本心理輔導，處理抑鬱、焦慮、童年創傷及關係困難。愛丁堡面談及全英國、香港網上輔導。'
  ],
  'hk/sessioninfo': [
    '約見資料及收費 — 陳渭東，心理治療師',
    '心理輔導約見資料、收費及預約方法。愛丁堡面談，全英國包括倫敦、香港及海外提供網上輔導服務。'
  ],
  'hk/sessioninfo/edinburgh': [
    '愛丁堡面談輔導及沙盤治療 — 陳渭東',
    '愛丁堡面談心理治療、輔導及榮格沙盤治療，BACP註冊華人心理治療師陳渭東。首次諮詢免費。'
  ],
  'hk/sessioninfo/online-uk': [
    '英國網上心理輔導 — 陳渭東，心理治療師',
    '全英國網上心理治療及輔導服務——倫敦、曼徹斯特、伯明翰、愛丁堡及其他城市。BACP註冊華人心理治療師。首次諮詢免費。'
  ],
  'hk/sessioninfo/hong-kong': [
    '香港網上心理輔導及心理治療 — 陳渭東 Perry WT Chan',
    '為香港來訪提供廣東話、普通話及英語網上心理治療及輔導。處理抑鬱、焦慮、創傷及關係困難。每節HK$1,100。BACP註冊心理治療師。首次諮詢免費。'
  ],
  'hk/sessioninfo/international': [
    '海外網上心理輔導 — 陳渭東 Perry WT Chan',
    '為海外來訪提供廣東話、普通話及英語網上心理治療。BACP註冊心理治療師，駐愛丁堡，跨時區服務。首次諮詢免費。'
  ],
  'hk/memories': [
    'Memories — 陳渭東，心理治療師',
    '陳渭東的個人反思及創意探索，駐愛丁堡華人心理治療師，提供倫敦及全英國網上輔導。'
  ],
  'hk/sd/about': [
    'Social Dreaming Matrix — 陳渭東，英國及香港',
    '陳渭東主持的 Social Dreaming Matrix 活動，英國（包括倫敦）及香港，一起探索集體夢境與潛意識。'
  ],
}

// Routes that just get canonical/hreflang but no unique meta
const extraRoutes = [
  'en/sd/london_july', 'en/sd/london_sept', 'en/sd/hk_may',
  'hk/sd/london_july', 'hk/sd/london_sept', 'hk/sd/hk_may',
]

// /sd routes that duplicate /sd/about — canonical should point to /sd/about
const sdRedirects = [
  ['en/sd', 'en/sd/about'],
  ['hk/sd', 'hk/sd/about'],
]

// Old /tc routes that need static redirect pages to /hk equivalents
const tcRedirects = [
  'tc', 'tc/therapy', 'tc/sessioninfo', 'tc/sessioninfo/edinburgh',
  'tc/sessioninfo/online-uk', 'tc/sessioninfo/hong-kong', 'tc/sessioninfo/international',
  'tc/memories', 'tc/sd', 'tc/sd/about',
]

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function trailingSlash(url) {
  return url.endsWith('/') ? url : url + '/'
}

function buildHreflang(route) {
  var enPath = route.replace(/^hk(\/|$)/, 'en$1')
  var hkPath = route.replace(/^en(\/|$)/, 'hk$1')
  return [
    '<link rel="canonical" href="' + trailingSlash(base + '/' + route) + '">',
    '<link rel="alternate" hreflang="en" href="' + trailingSlash(base + '/' + enPath) + '">',
    '<link rel="alternate" hreflang="zh-HK" href="' + trailingSlash(base + '/' + hkPath) + '">',
    '<link rel="alternate" hreflang="x-default" href="' + trailingSlash(base + '/' + enPath) + '">',
  ].join('\n    ')
}

function injectMeta(html, route, title, description) {
  var escaped_title = escapeHtml(title)
  var escaped_desc = escapeHtml(description)
  var hreflang = buildHreflang(route)

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    '<title>' + escaped_title + '</title>'
  )

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    '<meta name="description" content="' + escaped_desc + '">'
  )

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    '<meta property="og:title" content="' + escaped_title + '">'
  )
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    '<meta property="og:description" content="' + escaped_desc + '">'
  )
  html = html.replace(
    /<meta property="og:url" content="[^"]*">/,
    '<meta property="og:url" content="' + trailingSlash(base + '/' + route) + '">'
  )

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    '<meta name="twitter:title" content="' + escaped_title + '">'
  )
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    '<meta name="twitter:description" content="' + escaped_desc + '">'
  )

  // Set lang attribute for HK pages
  if (route.startsWith('hk')) {
    html = html.replace('<html lang="en"', '<html lang="zh-HK"')
  }

  // Inject hreflang/canonical into <head> (before </head>)
  html = html.replace('</head>', '    ' + hreflang + '\n  </head>')

  return html
}

var count = 0

// Routes with unique meta
Object.keys(meta).forEach(function(route) {
  var title = meta[route][0]
  var description = meta[route][1]
  var html = injectMeta(indexHtml, route, title, description)

  var dir = path.join(distDir, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  count++
})

// Extra routes — inject canonical/hreflang even without unique meta
extraRoutes.forEach(function(route) {
  var html = indexHtml
  var hreflang = buildHreflang(route)
  html = html.replace('</head>', '    ' + hreflang + '\n  </head>')
  if (route.startsWith('hk')) {
    html = html.replace('<html lang="en"', '<html lang="zh-HK"')
  }

  var dir = path.join(distDir, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  count++
})

// /sd pages — canonical points to /sd/about to avoid duplicate content
sdRedirects.forEach(function(pair) {
  var route = pair[0]
  var canonicalRoute = pair[1]
  var html = indexHtml
  var enPath = canonicalRoute.replace(/^hk(\/|$)/, 'en$1')
  var hkPath = canonicalRoute.replace(/^en(\/|$)/, 'hk$1')
  var tags = [
    '<link rel="canonical" href="' + trailingSlash(base + '/' + canonicalRoute) + '">',
    '<link rel="alternate" hreflang="en" href="' + trailingSlash(base + '/' + enPath) + '">',
    '<link rel="alternate" hreflang="zh-HK" href="' + trailingSlash(base + '/' + hkPath) + '">',
    '<link rel="alternate" hreflang="x-default" href="' + trailingSlash(base + '/' + enPath) + '">',
  ].join('\n    ')
  html = html.replace('</head>', '    ' + tags + '\n  </head>')
  if (route.startsWith('hk')) {
    html = html.replace('<html lang="en"', '<html lang="zh-HK"')
  }

  var dir = path.join(distDir, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  count++
})

// Root page — add canonical pointing to /en/
var rootHtml = indexHtml.replace(
  '</head>',
  '    <link rel="canonical" href="' + base + '/en/">\n  </head>'
)
fs.writeFileSync(path.join(distDir, 'index.html'), rootHtml)

// Static redirect pages for old /tc routes
function buildRedirectPage(target) {
  return '<!DOCTYPE html>\n<html><head>\n' +
    '<meta charset="utf-8">\n' +
    '<link rel="canonical" href="' + target + '">\n' +
    '<meta http-equiv="refresh" content="0;url=' + target + '">\n' +
    '<title>Redirecting...</title>\n' +
    '</head><body>\n' +
    '<p>This page has moved to <a href="' + target + '">' + target + '</a>.</p>\n' +
    '</body></html>'
}

tcRedirects.forEach(function(route) {
  var hkRoute = route.replace(/^tc(\/|$)/, 'hk$1')
  var target = trailingSlash(base + '/' + hkRoute)
  var dir = path.join(distDir, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), buildRedirectPage(target))
  count++
})

console.log('Created index.html for ' + count + ' routes (' + Object.keys(meta).length + ' with unique meta, ' + tcRedirects.length + ' redirects)')
