"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import "./style.css";
import TextEditor from '@/components/TextEditor';
import DOMPurify from 'dompurify';
import { getCourseById } from '@/actions/course.actions';
import CourseToolbar from '@/components/CourseToolbar';
import CoursePageSidebar from '@/components/CoursePageSidebar';

const CoursePage = ({ params }: { params: { id: string } }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  const isCourseCreator = true;
  const course = getCourseById(params.id);
  const [value, setValue] = useState<string>(course?.pages[0].content ?? "");

  const handleSaveEditClick = () => {
    if (isEditing) {
      console.log("Save clicked", value);
    }

    setIsEditing(!isEditing);
  }

  return (
    <div className="flex flex-col h-screen">
      <CourseToolbar courseTitle={course?.title} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="flex flex-row flex-grow">
        {showSidebar && (
          <CoursePageSidebar course={course} />
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