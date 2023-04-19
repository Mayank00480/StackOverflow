import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import HomeMainbar from './HomeMainbar'
import '../App.css'

export default function Home() {
  return (
    <div className = "home-container-1">
        <LeftSidebar />
        <div className = "home-container-2">
            <HomeMainbar />
            <RightSidebar />
        </div>
    </div>
  )
}
