import CMS from 'netlify-cms-app'

import ArticlePreview from './preview-templates/ArticlePreview'
import WorkshopPreview from './preview-templates/WorkshopPreview'

// Preview templates must be registered under the collection `name` from
// static/admin/config.yml so the editor preview matches the published page.
CMS.registerPreviewTemplate('publicaciones', ArticlePreview)
CMS.registerPreviewTemplate('clases-y-talleres', WorkshopPreview)
