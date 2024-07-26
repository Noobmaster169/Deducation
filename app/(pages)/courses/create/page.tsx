"use client"

import FileUploader from '@/components/FileUploader';
import FormItem from '@/components/FormItem';
import { uploadJSON } from '@/utils/ipfs';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { routeros } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ICourse } from '@/models/course.model';

const CreatePage = () => {
  const router = useRouter();

  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    files: [] as File[],
    imageUrl: "",
    description: "",
  });

  const [courseData, setCourseData] = useState<ICourse>();

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      files,
    }));

    console.log(formData);
  }, [files]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateClick = async () => {
    // Handle form submission here
    const resData = await uploadJSON(formData);
    const hash = resData.IpfsHash;
    setCourseData({
      _id: hash,
      title: formData.title,
      description: formData.description,
      coverImageUrl: formData.imageUrl,
      creator: "John Doe",
      pages: [],
      category: "Solana",
    });

    router.push(`/courses/${hash}`);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="mb-10 text-3xl">Create A New Course</p>
      <div className="max-w-7xl mx-14 p-5 md:px-10 w-full flex gap-5 justify-center min-h-[400px]">
        <div className="min-w-[450px] h-full flex flex-col">
          <FormItem placeholder="Course Title" maxLength={75} name="title" onChange={handleInputChange} />
          <textarea
            className="w-full h-full p-2 mt-5 rounded-lg flex-grow text-background"
            placeholder="Course Description"
            name="description"
            onChange={handleInputChange}
          />
        </div>
        <FileUploader
          imageUrl={formData.imageUrl}
          setFiles={setFiles}
          onFieldChange={(url: string) => setFormData(prevState => ({ ...prevState, imageUrl: url })) }
        />
      </div>
      <button type="submit" className="rounded-lg bg-primary text-background p-5 mt-10" onClick={handleCreateClick}>
        Create Course
      </button>
    </div>
  );
};

export default CreatePage;