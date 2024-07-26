import { ICourse } from '@/models/course.model';
import React, { useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { RxHamburgerMenu } from "react-icons/rx";
import { createNewUrl } from '@/utils/url';

type CourseToolbarProps = {
  course: ICourse | undefined;
  showSidebar: boolean;
  setShowSidebar: (newState: boolean) => void;
}

const CourseToolbar = ({ course, showSidebar, setShowSidebar }: CourseToolbarProps) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const router = useRouter();
  const pathName = usePathname();

  const createNewURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString());
    return(`${pathName}?${params.toString()}`);
  }
  
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  }

  const handlePreviousPageClick = () => {
    if (!page || Number(page) <= 1) {
      return;
    }
    
    const newPage = Number(page) - 1;
    const newUrl = createNewUrl({ newParam: "page", newValue: newPage.toString() });
    router.push(newUrl);
  }

  const handleNextPageClick = () => {
    if (!page || Number(page) == course?.pages.length) {
      return;
    }

    const newPage = Number(page) + 1;
    router.push(createNewURL(newPage));
    router.refresh();
  }

  return (
    <div className="flex p-5 w-full gap-5 font-semibold justify-between border-b-[1px] border-secondary">
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
        {course?.title}
      </div>

      {/* Invisible Spacer */}
      <div className="flex gap-3 items-center opacity-0 pointer-events-none">
        <RxHamburgerMenu size={24}/>
        <p>Pages</p>
      </div>

      <div className="flex items-center gap-8">
        <p
          className={`${page == "1" ? "text-gray-400 cursor-default" : "hover:text-gray-300 cursor-pointer"}`}
          onClick={handlePreviousPageClick}
        >
          Previous Page
        </p>
        <p
          className={`${Number(page) == course?.pages.length ? "text-gray-400 cursor-default" : "hover:text-gray-300 cursor-pointer"}`}
          onClick={handleNextPageClick}
        >
          Next Page
        </p>
      </div>
    </div>
  )
}

export default CourseToolbar;