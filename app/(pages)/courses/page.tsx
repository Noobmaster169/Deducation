"use client"

import { getAllCourses } from "@/actions/course.actions";
import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";
import { tempCourses } from "@/data/mockData";
import { useSearchParams } from "next/navigation";

const AllCoursePage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data, page } = getAllCourses({ query })

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col gap-10 2xl:max-w-[80vw] px-10 pt-[75px]">
        <div className="md:flex-row flex flex-col justify-between items-center">
          <h1 className="text-4xl font-semibold">Browse Courses</h1>
          <div className="flex items-center mt-5 w-full md:max-w-[350px]">
            <SearchBar placeholder="Search for a course..."/>
            {/* Filter */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {data.map(course => (
            <CourseCard course={course} key={course._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllCoursePage;
