import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import QuestionDetails from './QuestionDetails'

export default function DisplayQuestion() {
  return (
    <div className = "home-container-1">
    <LeftSidebar />
    <div className = "home-container-2">
    <QuestionDetails />
        <RightSidebar />
    </div>
</div>
  )
}
