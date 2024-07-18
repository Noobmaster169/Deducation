"use client"

import FileUploader from '@/components/FileUploader';
import FormItem from '@/components/FormItem'
import { UploadButton } from '@/utils/uploadthing';
import React, { useState } from 'react'

const CreatePage = () => {
  const [courseTitle, setCourseTitle] = useState<string>("");
  const [files, setFiles] = useState<File[]>([])
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleCourseTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourseTitle(e.target.value);
  };

  const handleImageFieldChange = (url: string) => {
    setImageUrl(url);
  };

  const handleCreateClick = () => {
    
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="mb-10 text-3xl">Create A New Course</p>
      <div className="max-w-7xl mx-14 p-5 md:px-10 w-full flex gap-5 justify-center min-h-[400px]">
        <div className="min-w-[450px] h-full flex flex-col">
          <FormItem placeholder="Course Title" maxLength={75} onChange={(e) => handleCourseTitleChange(e)} />
          <textarea className="w-full h-full p-2 mt-5 rounded-lg flex-grow text-background" placeholder="Course Description" />
        </div>
        <FileUploader imageUrl={imageUrl} setFiles={setFiles} onFieldChange={handleImageFieldChange} />
      </div>
      <button type="submit" className="rounded-lg bg-primary text-background p-5 mt-10" onClick={handleCreateClick}>
        Create Course
      </button>
    </div>
  )
}

export default CreatePage