"use client"

import React, { useEffect } from 'react'

import { ICourse } from '@/models/course.model';
import { createNewUrl } from '@/utils/url';
import { useRouter } from 'next/navigation';
import { randomUUID } from 'crypto';

type CoursePageSidebarProps = {
  course: ICourse | undefined;
  pageId: string;
}

const CoursePageSidebar = ({ course, pageId }: CoursePageSidebarProps) => {
  const router = useRouter();

  const handleChangePageClick = (pageId: string) => {
    const newUrl = createNewUrl({ newParam: "page", newValue: pageId });
    router.push(newUrl);
  }

  useEffect(() => {
    // doesn't work
    if (course?.pages.length == 0) {
      course?.pages.push({
        _id: randomUUID(),
        title: "Page 1",
        content: "<h1>Your First Page</h1><p>Click on the edit button to start editing this page</p>",
      })
    }

    console.log(course);
  }, [])

  return (
    <div className="h-full w-[250px] flex flex-col pt-1 px-1 border-r-[1px] border-secondary">
      {course?.pages.map((page) => (
        <div
          key={page._id}
          className={`
            cursor-pointer hover:text-gray-300 text-base rounded-lg w-full
            ${page._id == pageId ? "bg-primary bg-opacity-20" : ""}
          `}
        >
          <p className="py-2 px-3" onClick={() => handleChangePageClick(page._id)}>{page.title}</p>
        </div>
      ))}
    </div>
  )
}

export default CoursePageSidebar