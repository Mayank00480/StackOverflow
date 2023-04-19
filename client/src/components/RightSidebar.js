import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

export default function RightSidebar() {
  return (
    <div>
        <aside className = "right-sidebar">
         <Widget />
         <WidgetTags />
            </aside> </div>
  )
}
