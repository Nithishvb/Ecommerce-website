"use client"

import React from 'react'
import SideBar from './SideBar';
import ImageSlider from './ImageSlider';

const HomePage = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="flex-1">
        <ImageSlider />
      </div>
    </div>
  )
}

export default HomePage;