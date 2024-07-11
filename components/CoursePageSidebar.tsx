import React from 'react'

import { ICourse } from '@/models/course.model';

type CoursePageSidebarProps = {
  course: ICourse | undefined;
}

const CoursePageSidebar = ({ course }: CoursePageSidebarProps) => {
  return (
    <div className="h-full w-[250px] flex flex-col gap-3 py-5 px-8 border-r-[1px] border-secondary">
      {course?.pages.map((page) => (
        <div key={page._id} className="cursor-pointer hover:text-gray-300 text-base">
          <p>{page.title}</p>
        </div>
      ))}
    </div>
  )
}

export default CoursePageSidebar