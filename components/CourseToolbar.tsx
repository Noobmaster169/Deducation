import { ICourse } from '@/models/course.model';
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

type CourseToolbarProps = {
  courseTitle: string | undefined;
  showSidebar: boolean;
  setShowSidebar: (newState: boolean) => void;
}

const CourseToolbar = ({ courseTitle, showSidebar, setShowSidebar }: CourseToolbarProps) => {

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="flex p-5 w-full gap-5 font-semibold justify-between">
      <div
        className="flex gap-3 items-center cursor-pointer hover:text-gray-300"
        onClick={handleSidebarToggle}
      >
        <RxHamburgerMenu size={24}/>
        <p>Pages</p>
      </div>

      {/* Invisible Spacer */}
      <div className="flex items-center gap-8 opacity-0 pointer-events-none">
        <p>Previous Page</p>
        <p>Next Page</p>
      </div>

      <div className="flex-1 text-center text-xl">
        {courseTitle}
      </div>

      {/* Invisible Spacer */}
      <div className="flex gap-3 items-center opacity-0 pointer-events-none">
        <RxHamburgerMenu size={24}/>
        <p>Pages</p>
      </div>

      <div className="flex items-center gap-8">
        <p className="cursor-pointer hover:text-gray-300">Previous Page</p>
        <p className="cursor-pointer hover:text-gray-300">Next Page</p>
      </div>
    </div>
  )
}

export default CourseToolbar;