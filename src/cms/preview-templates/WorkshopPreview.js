import React from 'react'
import PropTypes from 'prop-types'
import { WorkshopTemplate } from '../../templates/workshop'

const WorkshopPreview = ({ entry, widgetFor }) => (
  <WorkshopTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    eventDates={entry.getIn(['data', 'eventDates'])}
    eventPlace={entry.getIn(['data', 'eventPlace'])}
    content={widgetFor('body')}
  />
)

WorkshopPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkshopPreview
