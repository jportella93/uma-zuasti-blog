import CMS from 'netlify-cms-app'

import ArticlePreview from './preview-templates/ArticlePreview'

CMS.registerPreviewTemplate('blog', ArticlePreview)
