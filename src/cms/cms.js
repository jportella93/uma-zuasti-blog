import CMS from 'netlify-cms'

import Articulos from './preview-templates/ArticulosPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ClasesYTalleres from './preview-templates/ClasesYTalleresPagePreview'

CMS.registerPreviewTemplate('articulos', Articulos)
CMS.registerPreviewTemplate('clasesYTalleres', ClasesYTalleres)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
