const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'v2',
    repo: 'https://github.com/jportella93/uma-zuasti-blog.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
