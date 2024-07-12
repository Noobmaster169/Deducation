"use client"

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

import "./style.css";
import TextEditor from '@/components/TextEditor';
import { getCourseById } from '@/actions/course.actions';
import CourseToolbar from '@/components/CourseToolbar';
import CoursePageSidebar from '@/components/CoursePageSidebar';

import DOMPurify from 'dompurify';
import { createNewUrl } from '@/utils/url';

const CoursePage = ({ params }: { params: { id: string } }) => {
  const isCourseCreator = true;
  const course = getCourseById(params.id);
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  const [value, setValue] = useState<string>(course?.pages[Number(page) - 1].content ?? "");

  const handleSaveEditClick = () => {
    if (isEditing) {
      console.log("Save clicked", value);
    }

    setIsEditing(!isEditing);
  }

  useEffect(() => {
    const newUrl = createNewUrl({ newParam: "page", newValue: page});
    setValue(course?.pages[Number(page) - 1].content ?? "");
    
    router.push(newUrl);
  }, [router, page])

  return (
    <div className="flex flex-col h-screen">
      <CourseToolbar course={course} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="flex flex-row flex-grow">
        {showSidebar && (
          <CoursePageSidebar course={course} currentPage={page} />
        )}
        <div className="w-full flex flex-col text-black">
          {isCourseCreator && (
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                onClick={handleSaveEditClick}
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
          )}
          
          {isEditing && (
            <TextEditor data={value} onDataChanged={setValue} />
          )}

          {!isEditing && (
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}
              className="text-white ck-content px-10"
            />
          )}
        </div>
      </div>

    </div>
  );
}

export default CoursePage