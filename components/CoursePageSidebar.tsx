import React from 'react'

import { ICourse } from '@/models/course.model';

type CoursePageSidebarProps = {
  course: ICourse | undefined;
}

const CoursePageSidebar = ({ course }: CoursePageSidebarProps) => {
  return (
    <div className="bg-red-900 h-full w-[250px] flex flex-col gap-3 p-5">
      {course?.pages.map((page) => (
        <div key={page._id} className="cursor-pointer hover:text-gray-300">
          <p>{page.title}</p>
        </div>
      ))}
    </div>
  )
}

export default CoursePageSidebar