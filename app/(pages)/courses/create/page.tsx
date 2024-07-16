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

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="mb-10 text-3xl">Create A New Course</p>
      <div className="max-w-7xl mx-14 p-5 md:px-10 w-full">
        <FormItem placeholder="Course Title" maxLength={75} onChange={(e) => handleCourseTitleChange(e)} />
          <FileUploader imageUrl={imageUrl} setFiles={setFiles} onFieldChange={handleImageFieldChange} />
      </div>
    </div>
  )
}

export default CreatePage