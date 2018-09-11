import React from 'react'
import PropTypes from 'prop-types'
import { ArticulosPageTemplate } from '../../templates/articulos-page'

const ArticulosPagePreview = ({ entry, widgetFor }) => (
  <ArticulosPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ArticulosPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticulosPagePreview
